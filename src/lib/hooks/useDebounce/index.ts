import { useRef } from 'react'

interface Params<T> {
  callback: (params?: T) => void
  delay?: number
}

export function useDebounce<T>({ callback, delay = 1500 }: Params<T>) {
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)

  function debounceFunction(...params: T[]) {
    if (timeOutRef.current) clearTimeout(timeOutRef.current)

    timeOutRef.current = setTimeout(() => {
      callback(...params)
    }, delay)
  }

  return debounceFunction
}
