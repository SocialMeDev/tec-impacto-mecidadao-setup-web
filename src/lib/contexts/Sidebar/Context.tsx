import { createContext } from 'react'

export type SidebarContextTypes = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const defaultValues = {
  isOpen: true,
  onClose: () => {},
  onOpen: () => {},
}

const SidebarContext = createContext<SidebarContextTypes>(defaultValues)

export default SidebarContext
