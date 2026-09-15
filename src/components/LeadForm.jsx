const rows = [
  ['1', 'January 7', 'John Smith', '$1000', '1034.50'],
  ['2', 'January 7', 'John Smith', '$1000', '1034.50'],
  ['3', 'January 7', 'John Smith', '$1000', '1034.50'],
]

export function LeadForm() {
  return (
    <section className="leaderboard-section" id="lead-form">
      <div className="container leaderboard-wrap">
        <h2 className="section-title section-title--small">SED FRINGILLA MAURIS SIT</h2>

        <div className="leaderboard-grid">
          <div className="leaderboard-cards">
            {rows.map(([rank, date, name, amount, value], index) => (
              <article className="leaderboard-card" key={`${rank}-${index}`}>
                <div className="leaderboard-card__meta">
                  <div className="avatar">{rank}</div>
                  <div>
                    <div className="leaderboard-card__date">{date}</div>
                    <div className="leaderboard-card__name">{name}</div>
                  </div>
                </div>
                <div className="leaderboard-card__value">{amount}</div>
              </article>
            ))}
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gain</th>
                  <th>Profit</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>John Smith</td><td>1034.50</td><td>12.5%</td><td>$1000</td></tr>
                <tr><td>John Smith</td><td>1034.50</td><td>12.5%</td><td>$1000</td></tr>
                <tr><td>John Smith</td><td>1034.50</td><td>12.5%</td><td>$1000</td></tr>
                <tr><td>John Smith</td><td>1034.50</td><td>12.5%</td><td>$1000</td></tr>
                <tr><td>John Smith</td><td>1034.50</td><td>12.5%</td><td>$1000</td></tr>
              </tbody>
            </table>
            <button type="button" className="button button--primary button--full">Join now</button>
          </div>
        </div>

        <div className="faq" id="education">
          <h2 className="section-title section-title--small">FAQs</h2>
          <div className="faq__item">
            <span>Question A</span>
            <span>⌃</span>
          </div>
          <div className="faq__item">
            <span>Question B</span>
            <span>⌃</span>
          </div>
          <div className="faq__item">
            <span>Question C</span>
            <span>⌃</span>
          </div>
          <div className="faq__item">
            <span>Question D</span>
            <span>⌃</span>
          </div>
        </div>
      </div>
    </section>
  )
}
