import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} /> {/*We can spread props since they correspond 1:1 from meals to MealItem(s)*/}
        </li>
      ))}
    </ul>
  );
}
