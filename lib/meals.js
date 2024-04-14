import sql from 'better-sqlite3';

//establishing the database connection
const db = sql('meals.db'); //need to specify which db to connect to

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
    return db.prepare('SELECT * FROM meals').all();
}