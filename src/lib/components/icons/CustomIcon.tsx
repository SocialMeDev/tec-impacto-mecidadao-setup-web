import { FC, memo } from 'react'
import { ComponentWithAs, Icon as ChakraIcon, IconProps } from '@chakra-ui/react'

type Props = IconProps & {
  as: ComponentWithAs<'svg', IconProps>
}

const Icon: FC<Props> = ({ boxSize = 5, ...rest }) => {
  return <Icon boxSize={boxSize} {...rest} />
}

export default memo(ChakraIcon)
