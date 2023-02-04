import { memo, useRef, FC } from 'react'
import { Input, FormControl, FormLabel, Flex } from '@chakra-ui/react'

import { useHotKeyWithFocus } from '@lib/hooks'

type Props = {
  id?: string
  limit: number
  totalItems: number
  onChangePage: (newPage: number) => void
}

const PaginationShortcut: FC<Props> = ({ id = 'shortcut', limit, totalItems, onChangePage }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const goToPage = () => {
    const page = Number(inputRef.current?.value)
    const isValidPage = page * limit < totalItems && page > 0
    if (isValidPage) {
      onChangePage(page)
    } else {
      onChangePage(1)
    }
  }

  useHotKeyWithFocus({ ref: inputRef, key: 'Enter', callback: goToPage })

  return (
    <FormControl>
      <Flex align="center" gap={1}>
        <FormLabel htmlFor={id} m={0}>
          Ir para:{' '}
        </FormLabel>

        <Input id={id} ref={inputRef} p={2} w="70px" />
      </Flex>
    </FormControl>
  )
}

export default memo(PaginationShortcut)
