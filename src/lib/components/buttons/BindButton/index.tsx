import { FC, memo, ReactElement } from 'react'
import { IconButton, Button, ButtonProps } from '@chakra-ui/react'

import { AttachmentLink } from '@lib/assets/icons'

type Props = ButtonProps & {
  children: ReactElement
  'aria-label'?: string
}

const BindButton: FC<Props> = ({ children, variant = 'outline', ...props }) => {
  if (children) {
    return (
      <Button variant={variant} leftIcon={<AttachmentLink />} {...props}>
        {children}
      </Button>
    )
  }

  return (
    <IconButton aria-label={props['aria-label'] || 'Vincular'} variant={variant} icon={<AttachmentLink />} {...props}>
      {children}
    </IconButton>
  )
}

export default memo(BindButton)
