export function removeEverythingThatIsNotNumber(value: string | undefined, defaultEmptyValue = ''): string {
  if (!value) return defaultEmptyValue

  return value.replace(/[^\d]+/g, '')
}
