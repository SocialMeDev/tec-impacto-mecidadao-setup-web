import { useEffect, useContext, ReactElement, FC } from 'react'
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react'

import SidebarContext, { SidebarContextTypes } from './Context'

type Props = {
  children: ReactElement
}

const SidebarDrawerProvider: FC<Props> = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false })

  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    if (isMobile) return onClose()

    onOpen()
  }, [isMobile])

  return <SidebarContext.Provider value={{ isOpen, onOpen, onClose }}>{children}</SidebarContext.Provider>
}

export default SidebarDrawerProvider

export const useSidebar = () => useContext<SidebarContextTypes>(SidebarContext)
