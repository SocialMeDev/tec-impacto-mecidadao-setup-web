export function deleteLocalStorage(key: string): boolean {
  localStorage.removeItem(key)

  return true
}
