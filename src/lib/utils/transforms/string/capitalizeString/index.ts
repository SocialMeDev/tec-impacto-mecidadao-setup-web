export function capitalizeString(string: string): string {
  if (!string) return '-'

  const splitedValue = string.toLowerCase().split(' ')

  const capitalizedString: string[] = []

  splitedValue.forEach((string) => {
    let word = ''

    if (string.length <= 2) {
      word = string.charAt(0) + string.slice(1)
    } else {
      word = string.charAt(0).toUpperCase() + string.slice(1)
    }

    capitalizedString.push(word)
  })

  return capitalizedString.join(' ')
}
