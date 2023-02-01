import { MutableRefObject, useEffect, useRef } from 'react'

type Callback = () => void

export function useHotKeyWithFocus<Type>(ref: MutableRefObject<Type>, key: string, callback: Callback): null {
  const actionRef = useRef(callback)

  useEffect(() => {
    actionRef.current = callback
  })

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (document.activeElement !== ref.current) return
      if (event.code === key) actionRef.current()
    }

    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [key])

  return null
}
