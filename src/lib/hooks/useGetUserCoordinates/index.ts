import { useCallback, useEffect, useState } from 'react'

import toast from '@lib/utils/toast'

type PossibleGeolocatioErrors = {
  [index: number]: string
}

type Params = {
  condition?: boolean
}

export function useGetUsersLocation(params: Params = {}) {
  const condition = params.condition || true

  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0])
  const [loadingCoordinates, setLoadingCoordinates] = useState(false)

  const getPossition = useCallback((position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords
    setCoordinates([latitude, longitude])
  }, [])

  const errorCallback = useCallback((error: GeolocationPositionError) => {
    const errors: PossibleGeolocatioErrors = {
      1: 'Permissão para acessar localização negada!',
      2: 'Sua posição está indispónível',
      3: 'Demorou muito para obter a sua localização',
    }

    const errorMessage = errors[error.code]

    toast.error(errorMessage)
  }, [])

  useEffect(() => {
    setLoadingCoordinates(true)

    if (condition) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPossition, errorCallback)
      } else {
        toast.info('Este navegador não possui Geolocalização disponível')
      }
    }

    setLoadingCoordinates(false)
  }, [condition])

  return { coordinates, loadingCoordinates }
}
