import Link from 'next/link';

export default function Meals() {
    return <main>
        <h1>Meals</h1>
        <Link href="../">Home</Link>
        <Link href="/meals/share">Share Meals</Link>
        <Link href="/community">Community</Link>
    </main>
}