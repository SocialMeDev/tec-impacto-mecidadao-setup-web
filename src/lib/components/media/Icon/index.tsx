import { FC, memo } from 'react'
import { ComponentWithAs, Icon as ChakraIcon, IconProps } from '@chakra-ui/react'

export type CustomIconProps = IconProps & {
  as: ComponentWithAs<'svg', IconProps>
}

const Icon: FC<CustomIconProps> = ({ boxSize = 5, ...rest }) => {
  return <Icon boxSize={boxSize} {...rest} />
}

export default memo(ChakraIcon)
