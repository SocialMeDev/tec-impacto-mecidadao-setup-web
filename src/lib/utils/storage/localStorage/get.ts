export function getLocalStorage(key: string): string | boolean {
  const value = localStorage.getItem(key)

  if (!value) return false

  return value
}
