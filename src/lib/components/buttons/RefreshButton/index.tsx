import { FC, memo, ReactElement } from 'react'
import { IconButton, Button, ButtonProps } from '@chakra-ui/react'

import { SpinningArrows } from '@lib/components/icons'

type Props = ButtonProps & {
  children: ReactElement
  'aria-label'?: string
}

const RefreshButton: FC<Props> = ({ children, variant = 'outline', ...props }) => {
  if (children) {
    return (
      <Button variant={variant} leftIcon={<SpinningArrows />} {...props}>
        {children}
      </Button>
    )
  }

  return (
    <IconButton aria-label={props['aria-label'] || 'Recarregar'} variant={variant} icon={<SpinningArrows />} {...props}>
      {children}
    </IconButton>
  )
}

export default memo(RefreshButton)
