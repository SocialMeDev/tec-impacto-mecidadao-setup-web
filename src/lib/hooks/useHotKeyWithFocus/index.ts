import { MutableRefObject, useEffect, useRef } from 'react'

type Params<T> = {
  ref?: MutableRefObject<T>
  key: string
  callback: () => void
}

export function useHotKeyWithFocus<T>({ key, ref, callback }: Params<T>): null {
  const actionRef = useRef(callback)

  useEffect(() => {
    actionRef.current = callback
  })

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (ref) if (document.activeElement !== ref.current) return

      if (event.code === key) actionRef.current()
    }

    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [key])

  return null
}
