"use client";

//REMEMBER -- error.message is hidden by Next.js to protect 
//any potentially sensitive data in the error message

export default function Error({ error }) { //Next.js passes in error object
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meals. Please try again later.</p>
    </main>
  );
}
