"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

//useFormState passes a prevState in addition to the formData
//so we need to account for it in the argument body
export async function shareMeal(prevState, formData) {
  //constructing a meal object from the form values
  const meal = {
    title: formData.get("title"), //returns value entered into certain field -- takes field's "name" as an argument
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  const anyFieldIsEmpty =
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email);

  const emailIsInvalid = !meal.creator_email.includes("@");
  const imageIsInvalid = !meal.image || meal.image.size === 0;

  if (anyFieldIsEmpty || emailIsInvalid || imageIsInvalid) {
    //can return a response object to convey the error -- can't contain methods
    return {
      message: "Invalid Input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals"); //tells Next.js to revalidate the cache that belongs to this route path
  redirect("/meals");
}
