import { memo, forwardRef, ReactElement } from 'react'

import { MenuButton, IconButton, MenuButtonProps } from '@chakra-ui/react'

import { ThreeDots } from '@lib/components/icons'

type Props = MenuButtonProps & {
  children: ReactElement
  colorScheme?: string
  color?: string
}

const DotsButton = forwardRef<any, Props>(({ children, colorScheme = 'gray', color = 'dark', ...rest }, ref) => {
  return (
    <MenuButton
      ref={ref}
      aria-label="Demostração do botão de menu padronizado"
      as={IconButton}
      icon={<ThreeDots color={color} />}
      colorScheme={colorScheme}
      variant="ghost"
      {...rest}
    >
      {children}
    </MenuButton>
  )
})

export default memo(DotsButton)
