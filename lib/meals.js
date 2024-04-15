import fs from "node:fs"; //allows us to work with the file system

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

//establishing the database connection
const db = sql("meals.db"); //need to specify which db to connect to

//will pull data from db and transform it to work with the client
export async function getMeals() {
  //wrapping data in promise to simulate how it would behave
  //not necessary to do here but it's good to know how to do it
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //simulating error for error.js page
  // throw new Error('Loading meals failed');

  //prepare() lets us prepare a new SQL statement
  //We're selecting all columns from the meals table
  //all() returns all rows that satisfy the statement (to get the data)
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  //using the get() method to retrieve slug from DB because it protects
  //against SQL injection. "?" is a placeholder for the slug before we retrieve it from DB.
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}



export async function saveMeal(meal) {
  //REMEMBER -- we can create new properties and overwrite old ones on the fly
  //this is why we can set the meal props to the new values (like below)

  //creating the slug
  meal.slug = slugify(meal.title, { lower: true }); //takes a string we wanna convert to the slug, and a config object -- in our case we're making it all lowercase

  /* sanitizing the instructions -- this is because the user can enter 
    whatever they want in the instructions field (like every field) except
    the instructions are output as pure HTML, which would be vulnerable to 
    Cross Site Scripting attacks. This is why we need to sanitize the 
    instructions prop before we let it into the database*/
  //
  meal.instructions = xss(meal.instructions);

  //splitting the pathname to the left of the '.', they both go into an
  //array, and then pop() returns the last element in that array which is the file extension
  const extension = meal.image.name.split(".").pop();

  //generating a unique filename -- probably a good idea to add a random number to the end someday
  const fileName = `${meal.slug}.${extension}`;

  //now need to write image to a file in the "public" folder
  // createWriteStream() creates a stream we can use to write to the specified path
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  //need to convert image to array buffer in order to write the file
  const bufferedImage = await meal.image.arrayBuffer();

  //creates the file in the file system -- but also need to account for upload errors
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  //now we want to store the meal in the database
  //first, we want to make sure we store the path of the new file in the meal's image prop
  meal.image = `/images/${fileName}`; //don't need to include /public because it's implied

  //writing to database
  //very particular about commas
  db.prepare(
    `
    INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
  `
  ).run(meal);
}
