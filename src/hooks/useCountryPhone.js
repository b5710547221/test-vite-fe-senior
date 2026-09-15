import { useEffect, useState } from 'react'
import { countries } from '../data/countries'

export function useCountryPhone(initialCountry = 'cyprus') {
  const [country, setCountry] = useState(initialCountry)
  const selected = countries.find((item) => item.value === country) ?? countries[0]
  const [phone, setPhone] = useState(selected.code)

  useEffect(() => {
    setPhone((current) => {
      const old = countries.find((item) => current.startsWith(item.code))
      const national = old ? current.slice(old.code.length).replace(/\D/g, '') : current.replace(/\D/g, '')
      return `${selected.code}${national}`
    })
  }, [country, selected.code])

  return { country, setCountry, phone, setPhone, selectedCountry: selected }
}
