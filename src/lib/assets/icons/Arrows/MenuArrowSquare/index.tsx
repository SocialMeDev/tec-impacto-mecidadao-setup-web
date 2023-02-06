import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import { Icon } from '@lib/components'

const MenuArrowSquareIcon = createIcon({
  displayName: 'MenuArrowSquareIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M24 0v24h-24v-24"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 21h-12c-1.657 0-3-1.343-3-3v-12c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3v12c0 1.657-1.343 3-3 3Z"
        ></path>
        <line
          x1="12"
          x2="16"
          y1="8"
          y2="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <line
          x1="14"
          x2="17"
          y1="12"
          y2="12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <line
          x1="12"
          x2="16"
          y1="16"
          y2="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 15l3-3 -3-3"
        ></path>
      </g>
    </>
  ),
})

const MenuArrowSquare: FC<IconProps> = (props) => {
  return <Icon as={MenuArrowSquareIcon} {...props} />
}

export default memo(MenuArrowSquare)
