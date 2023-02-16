import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'
import { Box, SelectProps, useOutsideClick } from '@chakra-ui/react'

import Option from './components/Option'
import SelectField from './components/Field'
import { OptionValue, Option as OpitionType } from '@lib/types'

type Props = SelectProps & {
  options: OpitionType[]
  onChange: (value: OptionValue) => void
}

const CustomSelect: FC<Props> = ({ value, options, onChange, ...selectProps }) => {
  const [selectedValue, setSelectedValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  const boxRef = useRef<HTMLDivElement | null>(null)

  const labelFromValue = useMemo(() => {
    const option = options.filter((option) => option.value === selectedValue)
    if (option.length === 0) return ''
    return option[0].label
  }, [selectedValue])

  function handleOnClickOption(value: OptionValue): void {
    setSelectedValue(value)
    setIsFocused(false)
  }

  useOutsideClick({
    ref: boxRef,
    handler: () => setIsFocused(false),
  })

  useEffect(() => {
    onChange(selectedValue)
  }, [selectedValue])

  return (
    <Box
      width="100%"
      ref={boxRef}
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      className="accessible"
      position="relative"
      rounded="md"
    >
      <SelectField label={labelFromValue} selectProps={selectProps} />

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
        mt={2}
        p={1}
      >
        {options.map(({ label, value }) => (
          <Option
            key={value}
            label={label}
            value={value}
            isSelectedValue={selectedValue === value}
            onClick={handleOnClickOption}
          />
        ))}
      </Box>
    </Box>
  )
}
export default memo(CustomSelect)
