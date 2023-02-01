import { FC, memo, useRef } from 'react'
import { Box, Text } from '@chakra-ui/react'

import { useHotKeyWithFocus } from '@lib/hooks'
import { ISelectLabel, ISelectValue } from '@lib/components/inputs/types'

export type Props = {
  label: ISelectLabel
  value: ISelectValue
  isSelectedValue: boolean
  onClick: (value: ISelectValue) => void
}

const SelectOption: FC<Props> = ({ label, value, isSelectedValue, onClick }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useHotKeyWithFocus(ref, 'Enter', () => onClick(value))

  return (
    <Box
      ref={ref}
      tabIndex={0}
      className="accessible"
      rounded="sm"
      onClick={() => onClick(value)}
      p={1}
      mb={1}
      px={2}
      bg={isSelectedValue ? 'primary' : 'transparent'}
      color={isSelectedValue ? 'light' : 'dark'}
      _hover={{ bg: 'primary', color: 'light' }}
    >
      <Text>{label}</Text>
    </Box>
  )
}

export default memo(SelectOption)
