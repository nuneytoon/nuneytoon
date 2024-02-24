import Link from "next/link";

export default function Welcome() {
  return (
    <main className="welcome flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/home" className="text-amber-500">Explore</Link>
    </main>
  );
}
