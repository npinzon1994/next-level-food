import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="../">Home</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
