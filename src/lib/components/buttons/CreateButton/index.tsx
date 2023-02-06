import { FC, memo, ReactElement } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

import { Plus } from '@lib/assets/icons'

type Props = ButtonProps & {
  children: ReactElement
}

const CreateButton: FC<Props> = ({ children, ...props }) => {
  return (
    <Button leftIcon={<Plus />} {...props}>
      {children}
    </Button>
  )
}

export default memo(CreateButton)
