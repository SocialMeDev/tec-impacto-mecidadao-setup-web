import { FC, memo, useRef } from 'react'
import { Box, Text } from '@chakra-ui/react'

import { useHotKeyWithFocus } from '@lib/hooks'
import { ISelectOption, ISelectLabel, ISelectValue } from '@lib/components/inputs/types'

export type Props = {
  label: ISelectLabel
  value: ISelectValue
  onClick: (value: ISelectOption) => void
}

const MultipleSelectOption: FC<Props> = ({ label, value, onClick }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useHotKeyWithFocus(ref, 'Enter', () => onClick({ label, value }))

  return (
    <Box
      ref={ref}
      tabIndex={0}
      className="accessible"
      onClick={() => onClick({ label, value })}
      p={1}
      mb={1}
      px={2}
      rounded="sm"
      _hover={{ bg: 'primary', color: 'light' }}
    >
      <Text>{label}</Text>
    </Box>
  )
}

export default memo(MultipleSelectOption)
