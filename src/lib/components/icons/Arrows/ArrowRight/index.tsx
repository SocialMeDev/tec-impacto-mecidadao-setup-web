import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import CustomIcon from '../../CustomIcon'

const ArrowRightIcon = createIcon({
  displayName: 'ArrowRight',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M10,16l4,-4l-4,-4"
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

const ArrowRight: FC<IconProps> = (props) => {
  return <CustomIcon as={ArrowRightIcon} {...props} />
}

export default memo(ArrowRight)
