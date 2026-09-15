import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer" id="company">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand-block">
            <Logo dark />
            <div className="footer__socials" aria-label="social links">
              <span>f</span>
              <span>in</span>
              <span>x</span>
            </div>
          </div>
          <div className="footer__copy">
            <h3>Find us on</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="footer__links">
            <a href="#top">Home</a>
            <a href="#markets">Markets</a>
            <a href="#education">Education</a>
            <a href="#lead-form">Contact</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} HFM Markets Group. Demo exercise.</span>
          <span>Risk warning: trading leveraged products involves risk.</span>
        </div>
      </div>
    </footer>
  )
}
