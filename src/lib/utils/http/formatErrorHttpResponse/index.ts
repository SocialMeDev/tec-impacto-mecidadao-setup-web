import { AxiosError } from 'axios'

const defaultErrorMessage = 'Houve um erro no servidor'

type PossibleErrors = {
  [key: number]: string
}

const handleAxiosErrors = (responseStatus: number) => {
  const possibleErros: PossibleErrors = {
    404: 'Rota não encontrada',
  }

  return {
    header: {
      title: possibleErros[responseStatus] || defaultErrorMessage,
      success: false,
    },
  }
}

const handleNetworkError = (error: AxiosError) => {
  let errorMessage = defaultErrorMessage

  if (error.message.includes('timeout')) {
    errorMessage = 'Tempo de resposta so servidor expirou'
  }

  return {
    header: {
      title: errorMessage,
      success: false,
    },
  }
}

export default async function formatErrorHttpResponse(error: AxiosError) {
  if (error?.response?.status) return handleAxiosErrors(error?.response?.status)

  if (error?.response?.data) return error.response.data

  if (error?.message) return handleNetworkError(error)
}
