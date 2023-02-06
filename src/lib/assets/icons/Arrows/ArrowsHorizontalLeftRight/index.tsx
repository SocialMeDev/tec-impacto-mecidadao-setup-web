import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import { Icon } from 'lib/components'

const ArrowsHorizontalLeftRightIcon = createIcon({
  displayName: 'ArrowsHorizontalLeftRightIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M16.103,10.793l2.897,-2.896l-2.897,-2.897" />
        <path d="M5,7.9h14" />
        <path d="M7.897,13.207l-2.897,2.896l2.897,2.897" />
        <path d="M19,16.1h-14" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

const ArrowsHorizontalLeftRight: FC<IconProps> = (props) => {
  return <Icon as={ArrowsHorizontalLeftRightIcon} {...props} />
}

export default memo(ArrowsHorizontalLeftRight)
