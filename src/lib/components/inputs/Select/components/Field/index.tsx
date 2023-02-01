import { FC, memo } from 'react'
import { Input, InputGroup, InputRightElement, SelectProps, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { ISelectLabel } from '@lib/components/inputs/types'

export type Props = {
  label: ISelectLabel
  selectProps: SelectProps
}

const SelectField: FC<Props> = ({ label }) => {
  const iconColor = useColorModeValue('gray.400', 'gray.500')
  const hoverIconColor = useColorModeValue('gray.600', 'gray.700')

  return (
    <InputGroup overflow="hidden">
      <Input className="input-accessible" readOnly value={label} />
      <InputRightElement minWidth="max-content" pr={2}>
        <ChevronDownIcon cursor="pointer" color={iconColor} fontSize={20} _hover={{ color: hoverIconColor }} />
      </InputRightElement>
    </InputGroup>
  )
}

export default memo(SelectField)
