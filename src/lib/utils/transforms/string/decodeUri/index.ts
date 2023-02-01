export function decodeURI(value: string): string {
  if (!value) return ''

  const newURI = value.replace('+', '%2B')

  return newURI
}
