export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__heading">
          <span className="hero__line">LOREM IPSUM <span className="hero__accent">DOLOR</span></span>
          <span className="hero__line hero__line--second">SIT AMET TOSIK</span>
        </h1>

        <form className="hero__form" action="#" method="post">
          <label className="hero__field">
            <span className="hero__label">LOREM IPSUM DOLOR SIT</span>
            <input type="text" placeholder="First Name" />
          </label>

          <label className="hero__field">
            <span className="hero__label">LOREM IPSUM DOLOR SIT</span>
            <input type="text" placeholder="Last Name" />
          </label>

          <label className="hero__field">
            <span className="hero__label">LOREM IPSUM DOLOR SIT</span>
            <input type="email" placeholder="Email" />
          </label>

          <label className="hero__field">
            <span className="hero__label">LOREM IPSUM DOLOR SIT</span>
            <select defaultValue="">
              <option value="" disabled>Country</option>
              <option>Cyprus</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Greece</option>
              <option>UAE</option>
            </select>
          </label>

          <label className="hero__field">
            <span className="hero__label">LOREM IPSUM DOLOR SIT</span>
            <input type="tel" placeholder="Phone" />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>I agree to terms and conditions</span>
          </label>

          <button type="submit" className="button button--primary button--full">Join now</button>
        </form>
      </div>
    </section>
  )
}
