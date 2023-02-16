import { FC, memo } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

import { MenuArrowSquare } from '@lib/components/icons'
import { useSidebar } from '@lib/contexts/Sidebar/Provider'

const SidebarCollapseButton: FC<IconButtonProps> = (props) => {
  const { isOpen, onOpen, onClose } = useSidebar()

  return (
    <IconButton
      variant="ghost"
      onClick={isOpen ? onClose : onOpen}
      icon={<MenuArrowSquare transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'} transition="0.5s all" />}
      {...props}
    />
  )
}

export default memo(SidebarCollapseButton)
