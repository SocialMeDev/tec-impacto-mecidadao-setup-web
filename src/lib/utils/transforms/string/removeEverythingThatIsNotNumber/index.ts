export default function removeEverythingThatIsNotNumber(value: string, defaultEmptyValue = ''): string {
  if (!value) return defaultEmptyValue

  return value.replace(/[^\d]+/g, '')
}
