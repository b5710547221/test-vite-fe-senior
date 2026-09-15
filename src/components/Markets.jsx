const prizes = [
  ['$1000', 'CRAS DAPIBUS', 'VIVAMUS'],
  ['$1000', 'CRAS DAPIBUS', 'VIVAMUS'],
  ['$1000', 'CRAS DAPIBUS', 'VIVAMUS'],
]

export function Markets() {
  return (
    <section className="prizes-section" id="markets">
      <div className="container">
        <h2 className="section-title section-title--small">PRIZES</h2>
        <div className="prize-grid">
          {prizes.map(([amount, label, sub], index) => (
            <article className="prize-card" key={`${label}-${index}`}>
              <div className="prize-badge">{index + 1}</div>
              <div className="prize-amount">{amount}</div>
              <div className="prize-label">{label}</div>
              <div className="prize-sub">{sub}</div>
              <button type="button" className="button button--primary button--full">Join now</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
