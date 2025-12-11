import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Spaced
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/tutorials" className="nav-link">
            Tutorials
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  )
}
