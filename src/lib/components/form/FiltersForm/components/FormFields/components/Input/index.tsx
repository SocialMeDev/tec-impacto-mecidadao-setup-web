import { FC, memo } from 'react'
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, InputProps } from '@chakra-ui/react'

type Props = InputProps & {
  htmlFor: string
  helperText: string
  label: string
  error: string
  onChange: (value: string) => void
}

const DynamicInput: FC<Props> = ({ htmlFor, helperText, label, onChange, error, ...props }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Input onChange={({ target }) => onChange(target.value)} {...props} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default memo(DynamicInput)
