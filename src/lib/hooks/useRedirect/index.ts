import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

import toast from '@lib/utils/toast'

type Params = {
  to: string
  errorMessage?: string
  condition: boolean
}

export function useRedirectWhen({ to, errorMessage, condition = false }: Params): void {
  const { push } = useRouter()

  const handleRedirect = useCallback(async () => {
    if (errorMessage) toast.error(errorMessage)

    await push(to)
  }, [])

  useEffect(() => {
    if (condition) handleRedirect()
  }, [condition])
}
