export function getFormattedStringInPhrase(string = '', defaultStringWhenEmpty = '-'): string {
  if (!string) return defaultStringWhenEmpty

  const slicedLowerCaseString = string.slice(1, string.length).toLowerCase()

  return string[0].toUpperCase() + slicedLowerCaseString
}
