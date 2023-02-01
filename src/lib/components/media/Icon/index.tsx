import { FC, memo } from 'react'
import { ComponentWithAs, Icon, IconProps } from '@chakra-ui/react'

type Props = IconProps & {
  as: ComponentWithAs<'svg', IconProps>
}

const IconDefault: FC<Props> = ({ boxSize = 5, ...rest }) => {
  return <Icon boxSize={boxSize} {...rest} />
}

export default memo(IconDefault)
