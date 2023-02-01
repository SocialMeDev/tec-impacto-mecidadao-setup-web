import { setLocalStorage, deleteLocalStorage, getLocalStorage } from './localStorage'

export function getStorage(key: string): string | boolean {
  return getLocalStorage(key)
}

export function setStorage(key: string, value: any): boolean {
  return setLocalStorage({ key, value })
}

export function deleteStorage(key: string): boolean {
  return deleteLocalStorage(key)
}
