import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import { Icon } from 'lib/components'

const ArrowLeftIcon = createIcon({
  displayName: 'ArrowLeft',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14,8l-4,4l4,4"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      />
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

const ArrowLeft: FC<IconProps> = (props) => {
  return <Icon as={ArrowLeftIcon} {...props} />
}

export default memo(ArrowLeft)
