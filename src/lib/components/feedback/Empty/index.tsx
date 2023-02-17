import { FC, memo, ReactElement } from 'react'
import { Flex, FlexProps, Heading, Text } from '@chakra-ui/react'

type Props = FlexProps & {
  title?: string
  description?: string
  children?: ReactElement
}

const EmptyContainer: FC<Props> = ({ title, description, children, height = '300px', ...rest }) => {
  return (
    <Flex p={4} gap={4} height={height} direction="column" align="center" justify="center" {...rest}>
      <Flex direction="column" align="center" justify="center" gap={2}>
        <Heading textAlign="center" size="md">
          {title}
        </Heading>

        {description && <Text textAlign="center">{description}</Text>}
        {children}
      </Flex>
    </Flex>
  )
}

export default memo(EmptyContainer)
