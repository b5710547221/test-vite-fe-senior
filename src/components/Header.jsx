import { useState } from 'react'
import { Logo } from './Logo'

const links = [
  ['Markets', '#markets'],
  ['Trading', '#trading'],
  ['Tools', '#tools'],
  ['Education', '#education'],
  ['Company', '#company'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <button className="nav__toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="nav__actions">
          <a href="#lead-form" className="nav__login">Login</a>
          <a href="#lead-form" className="button button--light">Register</a>
        </div>
      </div>
    </header>
  )
}
