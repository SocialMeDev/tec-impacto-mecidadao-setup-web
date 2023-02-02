export function validateDate(date: string): boolean {
  if (date.length !== 10) return false

  const [day, month, year] = date.split('/').map((value) => Number(value))

  if (month === 1) {
    if (day > 31 && day < 1) return false
  } else {
    if (day > 28 && day < 1) return false
  }

  if (month > 11 && month < 0) return false
  if (year < 1800 || year > 2100) return false

  return true
}
