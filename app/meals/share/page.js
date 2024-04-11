import Link from "next/link";

export default function ShareMealsPage() {
  return (
    <main>
      <h1>Share Meals Page</h1>
      <p>
        <Link href="/../../">Home</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
