type SetLocalStorageParams = {
  key: string
  value: any
}

export function setLocalStorage({ key, value }: SetLocalStorageParams): boolean {
  if (!key || !value) return false

  localStorage.setItem(key, value)

  return true
}
