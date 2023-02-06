import { FC, memo } from 'react'
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, InputProps } from '@chakra-ui/react'
import { MaskedInput } from '@lib/components'

type Props = InputProps & {
  htmlFor: string
  helperText: string
  label: string
  error: string
  mask: (value: string) => string
  onChange: (value: string) => void
}

const DynamicMaskedInput: FC<Props> = ({ htmlFor, helperText, label, onChange, mask, error, ...props }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <MaskedInput onChange={({ target }) => onChange(target.value)} mask={mask} id={htmlFor} {...props} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default memo(DynamicMaskedInput)
