"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  //constructing a meal object from the form values
  const meal = {
    title: formData.get("title"), //returns value entered into certain field -- takes field's "name" as an argument
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect('/meals');
}
