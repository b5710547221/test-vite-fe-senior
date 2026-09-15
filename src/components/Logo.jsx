export function Logo({ dark = false }) {
  return (
    <a className={`brand ${dark ? 'brand--dark' : ''}`} href="#top" aria-label="HFM Markets home">
      <span className="brand__mark" aria-hidden="true">
        <span>HF</span><b>M</b>
      </span>
      <span className="brand__name">HF MARKETS</span>
    </a>
  )
}
