import { FC, memo } from 'react'
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagCloseButton,
  TagLabel,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ISelectOption, ISelectValue } from '@lib/components/inputs/types'

export type Props = {
  showOptions: () => void
  allOptionsWasSelected: boolean
  selectedValues: ISelectOption[]
  onDelete: (value: ISelectValue) => void
}

const MultipleSelectField: FC<Props> = ({ selectedValues, allOptionsWasSelected, onDelete, showOptions }) => {
  const iconColor = useColorModeValue('gray.400', 'gray.500')

  return (
    <>
      <Tooltip isDisabled={allOptionsWasSelected} label="Todas as opções foram selecionadas" placement="top">
        <InputGroup>
          <Input className="input-accessible" readOnly onFocus={showOptions} />
          <InputRightElement minWidth="max-content" pr="2">
            <ChevronDownIcon cursor="pointer" color={iconColor} fontSize={20} onClick={showOptions} />
          </InputRightElement>
        </InputGroup>
      </Tooltip>

      <Flex mt={1} mb={2} flexWrap="wrap">
        {selectedValues.map(({ value, label }) => (
          <Tag key={label} variant="solid" colorScheme="green" mb={1} mr={1}>
            <TagLabel>{label}</TagLabel>
            <TagCloseButton className="accessible" onClick={() => onDelete(value)} />
          </Tag>
        ))}
      </Flex>
    </>
  )
}

export default memo(MultipleSelectField)
