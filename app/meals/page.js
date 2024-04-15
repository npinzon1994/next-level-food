import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.'
}

/*
This component is for the meal data fetching logic.

We want to isolate this logic from the rest of the page
so we can target this specific part of the page to show
a loading state.

This way, the header will be shown instantly to the user
while the loading indicator is shown only in place of the
to-be-rendered meal items.
*/
async function Meals() {
  const meals = await getMeals(); //getMeals returns a promise
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  const fallback = <p className={classes.loading}>Fetching meals...</p>;
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={fallback}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
