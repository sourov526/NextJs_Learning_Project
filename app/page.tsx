import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello Bangladesh</h1>
      <h3>Hello Pakistan</h3>
      <h4>Hello India</h4>
      <Link href="/users">Users</Link>
    </main>
  )
}
