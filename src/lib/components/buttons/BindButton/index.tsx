import { FC, memo, ReactElement } from 'react'
import { IconButton, Button, ButtonProps } from '@chakra-ui/react'

import { AttachmentLink } from '@lib/assets/icons'

type Props = ButtonProps & {
  children: ReactElement
  'aria-label'?: string
}

type ReturnedType = {
  [key: string]: ReactElement
}

const BindButton: FC<Props> = ({ children, variant = 'outline', ...props }) => {
  const type = children ? 'button' : 'icon'

  const IconButtonType = () => {
    return (
      <IconButton aria-label={props['aria-label'] || 'Vincular'} variant={variant} icon={<AttachmentLink />} {...props}>
        {children}
      </IconButton>
    )
  }

  const ButtonType = () => {
    return (
      <Button variant={variant} leftIcon={<AttachmentLink />} {...props}>
        {children}
      </Button>
    )
  }

  const types: ReturnedType = {
    icon: <IconButtonType />,
    button: <ButtonType />,
  }

  return types[type]
}

export default memo(BindButton)
