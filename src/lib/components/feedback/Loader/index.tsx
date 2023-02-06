import { FC, memo, ReactElement } from 'react'
import { Center, Flex, Text, Spinner, BoxProps } from '@chakra-ui/react'

type Props = BoxProps & {
  children: ReactElement
  text?: string
  direction?: 'column' | 'row'
  size: 'xs' | 'sm' | 'md' | 'lg'
  thickness?: string
  speed?: string
  emptyColor?: string
  color?: string
  isLoading: boolean
}

const LoaderDefault: FC<Props> = ({
  direction = 'column',
  text,
  size,
  isLoading,
  thickness = '2px',
  speed = '0.65s',
  emptyColor,
  color = 'primary',
  children,
  ...rest
}) => {
  if (isLoading || !children) {
    return (
      <Center {...rest}>
        <Flex color={color} direction={direction} align="center" gap={4}>
          <Spinner thickness={thickness} speed={speed} emptyColor={emptyColor} size={size} />
          <Text fontSize={size}>{text}</Text>
        </Flex>
      </Center>
    )
  }

  return children
}

export default memo(LoaderDefault)
