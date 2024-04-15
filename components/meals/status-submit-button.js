"use client";

import { useFormStatus } from "react-dom";
import classes from "./status-submit-button.module.css";

export default function StatusSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className={classes.button} type="submit" disabled={pending}>
      {pending ? "Sharing..." : "Share Meal"}
    </button>
  );
}
