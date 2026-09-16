import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { countries } from './data/countries'

const formSchema = yup.object({
  firstName: yup.string().trim().required('First name is required'),
  lastName: yup.string().trim().required('Last name is required'),
  country: yup.string().required('Country is required'),
  phone: yup.string().matches(/^\+\d{8,15}$/, 'Enter a valid phone number').required('Phone is required'),
  email: yup.string().trim().email('Enter a valid email address').required('Email is required'),
  experience: yup.string().required('Experience is required'),
  accepted: yup.boolean().oneOf([true], 'Please accept the terms'),
})

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { country: '', countryCode: '', phone: '', accepted: false },
  })

  const selectedCountry = watch('country')
  const selectedCode = countries.find((country) => country.value === selectedCountry)?.code ?? ''
  const phoneValue = watch('phone')
  const countryField = register('country')

  const onSubmit = (values) => {
    console.log('Lead form submitted', values)
  }

  const handleCountryChange = (event) => {
    const country = countries.find((item) => item.value === event.target.value)
    const nationalNumber = phoneValue.replace(/^\+\d+/, '')
    countryField.onChange(event)
    setValue('countryCode', country?.code ?? '')
    setValue('phone', country ? `${country.code}${nationalNumber}` : '')
  }

  const faqs = [
    ['Question A', 'Answer A'],
    ['Question B', 'Answer B'],
    ['Question C', 'Answer C'],
    ['Question D', 'Answer D'],
  ]

  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="container header-topline">
          <span>Member of HF Markets Group</span>
          <div className="header-tools">
            <a href="#">Download App</a>
            <a href="#">Contact us</a>
            <a href="#">Partner with us</a>
            <span className="flag" aria-label="United Kingdom flag">🇬🇧</span>
          </div>
        </div>

        <div className="container nav-row">
          <a className="brand" href="#top" aria-label="HFM Markets home">
            <span className="brand__mark">HF<span>M</span></span>
            <span className="brand__name">HF MARKETS</span>
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#">Markets</a>
            <a href="#">Trading</a>
            <a href="#">Investing</a>
            <a href="#">Tools</a>
            <a href="#">Education</a>
            <a href="#">Company</a>
          </nav>

          <div className="nav-actions">
            <button type="button" className="button button--ghost">Login</button>
            <button type="button" className="button button--success">Register</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-inner">
            <h1 className="hero-title">
              <span className="hero-title--accent">LOREM IPSUM DOLOR</span>
              <span>SIT AMET TOSIK</span>
            </h1>

            <form className="hero-form-panel" onSubmit={handleSubmit(onSubmit)} noValidate>
              <h2>Lorem ipsum dolor sit amet</h2>

              <div className="field-grid field-grid--two">
                <label className="field">
                  <span>First Name</span>
                  <input type="text" placeholder="First Name" {...register('firstName')} aria-invalid={Boolean(errors.firstName)} />
                  {errors.firstName && <small className="field-error">{errors.firstName.message}</small>}
                </label>
                <label className="field">
                  <span>Last Name</span>
                  <input type="text" placeholder="Last Name" {...register('lastName')} aria-invalid={Boolean(errors.lastName)} />
                  {errors.lastName && <small className="field-error">{errors.lastName.message}</small>}
                </label>
              </div>

              <div className="field-grid field-grid--two">
                <label className="field">
                  <span>Country</span>
                  <select defaultValue="" {...countryField} onChange={handleCountryChange} aria-invalid={Boolean(errors.country)}>
                    <option value="" disabled>Country</option>
                    {countries.map((country) => <option key={country.value} value={country.value}>{country.label}</option>)}
                  </select>
                  {errors.country && <small className="field-error">{errors.country.message}</small>}
                </label>
                <div className="field field--phone">
                  <span>Phone</span>
                  <div className="phone-wrap">
                    <select value={selectedCode} aria-label="Country code" disabled>
                      <option value="">Code</option>
                      {countries.map((country) => <option key={country.code} value={country.code}>{country.code}</option>)}
                    </select>
                    <input type="tel" placeholder="Phone" {...register('phone')} aria-invalid={Boolean(errors.phone)} />
                  </div>
                  {errors.phone && <small className="field-error">{errors.phone.message}</small>}
                </div>
              </div>

              <div className="field-grid field-grid--two">
                <label className="field">
                  <span>Email</span>
                  <input type="email" placeholder="Email" {...register('email')} aria-invalid={Boolean(errors.email)} />
                  {errors.email && <small className="field-error">{errors.email.message}</small>}
                </label>
                <label className="field">
                  <span>Experience</span>
                  <select defaultValue="" {...register('experience')} aria-invalid={Boolean(errors.experience)}>
                    <option value="" disabled>Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                  {errors.experience && <small className="field-error">{errors.experience.message}</small>}
                </label>
              </div>

              <label className="checkbox-line">
                <input type="checkbox" {...register('accepted')} aria-invalid={Boolean(errors.accepted)} />
                <span>I have read and accepted the <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a></span>
              </label>
              {errors.accepted && <small className="field-error checkbox-error">{errors.accepted.message}</small>}

              <button type="submit" className="button button--submit">Join now</button>
              {isSubmitSuccessful && <p className="form-success" role="status">Thank you. Your details have been submitted.</p>}
            </form>
          </div>
        </section>

        <section className="features-section">
          <div className="container features-wrap">
            <h2>QUISQUE RUTRUM</h2>

            <div className="feature-layout">
              <div className="feature-column">
                <div className="mini-feature">
                  <img className="mini-feature__icon" src="/feature-user.svg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                </div>

                <div className="mini-feature mini-feature--lower">
                  <img className="mini-feature__icon mini-feature__icon--money" src="/feature-money.svg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                </div>
              </div>

              <div className="device-showcase" aria-hidden="true">
                <img className="device-mockup" src="/device-mockup.svg" alt="" />
              </div>

              <div className="feature-column">
                <div className="mini-feature">
                  <img className="mini-feature__icon" src="/feature-chart.svg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                </div>

                <div className="mini-feature mini-feature--lower">
                  <img className="mini-feature__icon" src="/feature-user.svg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="prize-section">
          <div className="container">
            <h2>PRIZES</h2>

            <div className="prize-grid">
              <article className="prize-card">
                <img className="medal" src="/medal-1.svg" alt="First prize" />
                <div className="prize-card__amount">$1000</div>
                <div className="prize-card__label">CRAS DAPIBUS &amp; CRAS DAPIBUS</div>
              </article>

              <article className="prize-card">
                <img className="medal" src="/medal-2.svg" alt="Second prize" />
                <div className="prize-card__amount">$1000</div>
                <div className="prize-card__label">CRAS DAPIBUS</div>
              </article>

              <article className="prize-card">
                <img className="medal" src="/medal-3.svg" alt="Third prize" />
                <div className="prize-card__amount">$1000</div>
                <div className="prize-card__label">CRAS DAPIBUS</div>
              </article>
            </div>

            <button type="button" className="button button--submit prize-button">Join now</button>
            <p className="small-note">Terms and Conditions apply</p>
          </div>
        </section>

        <section className="leaderboard-section">
          <div className="container leaderboard-inner">
            <h2>SED FRINGILLA MAURIS SIT</h2>

            <div className="leaderboard-layout">
              <div className="winner-stack">
                <article className="winner-card">
                  <div className="winner-card__left">
                    <div className="winner-card__trophy"><img src="/trophy-1.svg" alt="First place trophy" /></div>
                    <div className="winner-card__meta">
                      <div className="winner-card__tag">JANUARY 1<sup>ST</sup> WINNER</div>
                      <strong>John Smith</strong>
                      <span>5678967564</span>
                      <div className="winner-card__gain">TOTAL GAIN OF <span>16344%</span></div>
                    </div>
                  </div>
                  <div className="winner-card__amount">$1000</div>
                </article>

                <article className="winner-card">
                  <div className="winner-card__left">
                    <div className="winner-card__trophy"><img src="/trophy-2.svg" alt="Second place trophy" /></div>
                    <div className="winner-card__meta">
                      <div className="winner-card__tag">JANUARY 2<sup>ND</sup> WINNER</div>
                      <strong>John Smith</strong>
                      <span>5678967564</span>
                      <div className="winner-card__gain">TOTAL GAIN OF <span>16344%</span></div>
                    </div>
                  </div>
                  <div className="winner-card__amount">$1000</div>
                </article>

                <article className="winner-card">
                  <div className="winner-card__left">
                    <div className="winner-card__trophy"><img src="/trophy-3.svg" alt="Third place trophy" /></div>
                    <div className="winner-card__meta">
                      <div className="winner-card__tag">JANUARY 3<sup>RD</sup> WINNER</div>
                      <strong>John Smith</strong>
                      <span>5678967564</span>
                      <div className="winner-card__gain">TOTAL GAIN OF <span>16344%</span></div>
                    </div>
                  </div>
                  <div className="winner-card__amount">$1000</div>
                </article>
              </div>

              <div className="leader-table-box">
                <div className="leader-table-title">ALIQUAM LOREM ANT</div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>John Smith</td><td>1624.19%</td></tr>
                    <tr><td>John Smith</td><td>1083.63%</td></tr>
                    <tr><td>John Smith</td><td>635.47%</td></tr>
                    <tr><td>John Smith</td><td>169.20%</td></tr>
                    <tr><td>John Smith</td><td>158.42%</td></tr>
                    <tr><td>John Smith</td><td>124.50%</td></tr>
                    <tr><td>John Smith</td><td>71.47%</td></tr>
                    <tr><td>John Smith</td><td>67.05%</td></tr>
                    <tr><td>John Smith</td><td>62.30%</td></tr>
                    <tr><td>John Smith</td><td>61.74%</td></tr>
                  </tbody>
                </table>
                <p className="leader-table-footnote">Nam quam nunc, blandit vel, luctus pulvinar</p>
              </div>
            </div>

            <div className="leader-table-actions">
              <button type="button" className="button button--submit leaderboard-button">Join now</button>
              <p className="small-note">Terms and Conditions apply</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-wrap">
            <h2>FAQs</h2>
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index

              return (
                <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={question}>
                  <button
                    type="button"
                    className="faq-item__row"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{question}</span>
                    <span className="faq-caret" aria-hidden="true">{isOpen ? '⌃' : '⌄'}</span>
                  </button>
                  {isOpen && <div className="faq-item__answer">{answer}</div>}
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <div className="footer-column">
              <h3>Find us on</h3>
              <div className="socials" aria-label="Social media links">
                <span>f</span><span>X</span><span>◎</span><span>◉</span><span>◌</span><span>in</span>
              </div>
            </div>
            <div className="footer-column">
              <h3>Download HFM App</h3>
              <div className="app-buttons">
                <button type="button" className="app-button"><span className="app-emoji"></span><span>Download on the App Store</span></button>
                <button type="button" className="app-button"><span className="app-emoji">▶</span><span>GET IT ON Google Play</span></button>
              </div>
            </div>
          </div>

          <div className="footer-column footer-column--wide">
            <h3>Risk Warning</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
