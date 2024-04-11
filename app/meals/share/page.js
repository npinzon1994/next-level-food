import Link from "next/link";

export default function ShareMealsPage() {
  return (
    <main>
      <h1>Share Meals</h1>
      <Link href="/../../">Home</Link>
      <Link href="/meals">Meals</Link>
      <Link href="/community">Community</Link>
    </main>
  );
}
