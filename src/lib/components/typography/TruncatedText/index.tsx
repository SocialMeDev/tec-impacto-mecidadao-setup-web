import { FC, memo } from 'react'
import { Tooltip, Text, TextProps } from '@chakra-ui/react'

type Props = TextProps & {
  children: string
  maxCharacters: number
}

const TruncatedText: FC<Props> = ({ children, maxCharacters = 75, ...rest }) => {
  if (!children) return null

  const isTextLarger = children.length > maxCharacters

  const text = isTextLarger ? `${children.substring(0, maxCharacters)}...` : children

  return (
    <Tooltip isDisabled={isTextLarger} color="light" label={children.substring(maxCharacters, children.length)}>
      <Text {...rest}>{text}</Text>
    </Tooltip>
  )
}

export default memo(TruncatedText)
