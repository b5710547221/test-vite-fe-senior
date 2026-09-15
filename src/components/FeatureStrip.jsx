const features = [
  ['01', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['02', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['03', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
]

export function FeatureStrip() {
  return (
    <section className="feature-strip" id="why-hfm">
      <div className="container feature-wrap">
        <h2 className="section-title">QUISQUE RUTRUM</h2>
        <div className="feature-layout">
          <div className="feature-list">
            {features.map(([number, title, copy]) => (
              <article className="feature" key={number}>
                <span className="feature__number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="phone-stage" aria-hidden="true">
            <div className="phone-frame">
              <div className="phone-screen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
