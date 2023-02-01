import { createStandaloneToast } from '@chakra-ui/toast'

const { toast } = createStandaloneToast()

type Status = 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined

const buildBasicToast = (title: string, status: Status) => {
  toast.closeAll()

  return toast({
    title,
    status,
    duration: 1500,
    isClosable: true,
    position: 'top-right',
  })
}

function createToast() {
  const toastManager = {
    error: (title: string) => buildBasicToast(title, 'error'),
    success: (title: string) => buildBasicToast(title, 'success'),
    info: (title: string) => buildBasicToast(title, 'info'),
    warning: (title: string) => buildBasicToast(title, 'warning'),
  }

  return toastManager
}

export default createToast()
