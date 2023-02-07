import { setLocalStorage, deleteLocalStorage, getLocalStorage } from './localStorage'

export function getStorage(key: string | undefined): string | boolean {
  if (!key) return false
  return getLocalStorage(key)
}

export function setStorage(key: string, value: any): boolean {
  return setLocalStorage({ key, value })
}

export function deleteStorage(key: string | undefined): boolean {
  if (!key) return false
  return deleteLocalStorage(key)
}
