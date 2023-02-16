import { FC, memo, ReactElement } from 'react'
import { Button, ButtonProps, IconButton } from '@chakra-ui/react'

import { Pen } from '@lib/components/icons'

type Props = ButtonProps & {
  children: ReactElement
  'aria-label'?: string
}

const UpdateButton: FC<Props> = ({ children, variant = 'ghost', colorScheme = 'gray', color = 'dark', ...props }) => {
  if (children) {
    return (
      <Button leftIcon={<Pen />} variant={variant} colorScheme={colorScheme} {...props}>
        {children}
      </Button>
    )
  }

  return (
    <IconButton
      aria-label={props['aria-label'] || 'Editar'}
      variant={variant}
      colorScheme={colorScheme}
      icon={<Pen color={color} />}
      {...props}
    >
      {children}
    </IconButton>
  )
}

export default memo(UpdateButton)
