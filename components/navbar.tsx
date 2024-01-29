import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const className =
    'className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"'
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-4">
      <nav className="w-full relative flex items-center justify-between my-4">
        <Link href="/" className="font-bold text-3xl">
          World<span className={className}>Vlogs</span>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
