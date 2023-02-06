import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'
import { Box, useOutsideClick } from '@chakra-ui/react'

import Options from './components/Option'
import SelectField from './components/Field'
import { ISelectOption, ISelectValue } from '../types'

type Props = {
  values: ISelectValue[]
  options: ISelectOption[]
  onChange: (value: ISelectValue[]) => void
}

const MultipleSelect: FC<Props> = ({ values = [], options = [], onChange }) => {
  const [selectedValues, setSelectedValues] = useState<ISelectOption[]>([])
  const [isFocused, setIsFocused] = useState(false)

  const boxRef = useRef<HTMLDivElement | null>(null)

  const filteredOptions = useMemo(() => {
    const values = selectedValues.map(({ value }) => value)
    return options.filter(({ value }) => !values.includes(value))
  }, [selectedValues])

  const allOptionsWasSelected = useMemo(() => {
    return selectedValues.length === options.length
  }, [selectedValues])

  function handleAddValue(option: ISelectOption): void {
    setSelectedValues([...selectedValues, option])
  }

  function handleRemoveSelectedValue(value: ISelectValue): void {
    setSelectedValues(selectedValues.filter((option) => option.value !== value))
  }

  useOutsideClick({
    ref: boxRef,
    handler: () => setIsFocused(false),
  })

  useEffect(() => {
    onChange(selectedValues.map(({ value }) => value))
  }, [selectedValues])

  useEffect(() => {
    setSelectedValues(options.filter(({ value }) => values.includes(value)))
  }, [])

  return (
    <Box ref={boxRef} position="relative" rounded="md">
      <SelectField
        allOptionsWasSelected={!allOptionsWasSelected}
        selectedValues={selectedValues}
        showOptions={() => setIsFocused(true)}
        onDelete={handleRemoveSelectedValue}
      />

      {!allOptionsWasSelected && (
        <Box
          zIndex={1}
          display={isFocused ? 'block' : 'none'}
          bg="light"
          borderColor="borderColor"
          borderWidth="1px"
          position="absolute"
          height="200px"
          width="100%"
          rounded="sm"
          overflowY="auto"
          p={1}
        >
          {filteredOptions.map(({ label, value }) => {
            return <Options key={value} label={label} value={value} onClick={handleAddValue} />
          })}
        </Box>
      )}
    </Box>
  )
}

export default memo(MultipleSelect)
