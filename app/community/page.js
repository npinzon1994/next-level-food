import Link from "next/link";

export default function CommunityPage() {
  return (
    <main>
      <h1>Community</h1>
      <p>
        <Link href="/../">Home</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
    </main>
  );
}
