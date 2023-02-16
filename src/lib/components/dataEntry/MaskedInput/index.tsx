import { memo, forwardRef, FC } from 'react'
import { Input, InputProps } from '@chakra-ui/react'

type Props = InputProps & {
  mask: (value: string) => string
}

const MaskedInput: FC<Props> = forwardRef<HTMLInputElement | null, Props>(({ onChange, mask, ...rest }, ref) => {
  return (
    <Input
      {...rest}
      ref={ref}
      onChange={(event) => {
        event.target.value = mask(event.target.value)
        if (onChange) onChange(event)
      }}
    />
  )
})

export default memo(MaskedInput)
