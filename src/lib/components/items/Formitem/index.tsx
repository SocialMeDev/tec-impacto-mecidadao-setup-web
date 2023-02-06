import { FC, memo } from 'react'
import { FormControl, FormErrorMessage, FormLabel, FormHelperText, FormControlProps } from '@chakra-ui/react'

type Error = {
  message?: string
}

type Props = FormControlProps & {
  helperText?: string
  htmlFor?: string
  label: string
  error?: Error
}

const FormItem: FC<Props> = ({ error, helperText, htmlFor, label, children, ...rest }) => {
  const hasError = error !== undefined

  return (
    <FormControl mb={4} isInvalid={hasError} {...rest}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
      {hasError && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default memo(FormItem)
