import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1>
        Hola Mundo<br />
        NextJS
      </h1>

      <Link href={'/about'}>About Page</Link>
    </main>
  )
}

