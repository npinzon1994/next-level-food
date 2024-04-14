import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  //formatting the instructions to include line breaks because
  //line breaks are ignored when fetching from DB
  meal.instructions = meal.instructions.replace(/\n/g, "<br />"); //replacing its line breaks with HTML line breaks: <br />

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/*Need to do it this way because we modified the HTML code above the return statement*/}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
