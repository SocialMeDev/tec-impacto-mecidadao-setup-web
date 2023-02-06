import { FC, memo, ReactElement, useRef, useState } from 'react'
import { Center, CenterProps } from '@chakra-ui/react'

import { useHotKeyWithFocus } from '@lib/hooks'

type Props = CenterProps & {
  children: ReactElement
  onClick: () => void
}

export const DropzoneWrapper: FC<Props> = ({ children, onClick, onDrop }) => {
  const [dragFileEnter, setDragFileEnter] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  useHotKeyWithFocus({ ref, key: 'Enter', callback: onClick })

  return (
    <Center
      ref={ref}
      p={4}
      tabIndex={0}
      onClick={() => onClick()}
      onKeyPress={() => onClick()}
      onDragEnter={() => setDragFileEnter(true)}
      onDragLeave={() => setDragFileEnter(false)}
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
      width="100%"
      minHeight="100%"
      draggable="true"
      transition="all 250ms"
      cursor="pointer"
      border="2px dashed"
      rounded="md"
      borderColor={dragFileEnter ? 'primary' : 'borderColor'}
      color={dragFileEnter ? 'primary' : 'dark'}
      sx={{
        '&:hover, &:focus': {
          outlineColor: 'primary',
          color: 'primary',
          borderColor: 'primary',
          svg: {
            color: 'primary',
          },
        },
      }}
    >
      {children}
    </Center>
  )
}

export default memo(DropzoneWrapper)
