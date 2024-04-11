import Link from 'next/link';

export default function CommunityPage() {
    return <main>
        <h1>Community</h1>
        <Link href="/../">Home</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share Meals</Link>
    </main>
}