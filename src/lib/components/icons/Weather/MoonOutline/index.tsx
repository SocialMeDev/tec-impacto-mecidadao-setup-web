import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import CustomIcon from '../../CustomIcon'

const MoonOutlineIcon = createIcon({
  displayName: 'MoonOutlineIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M19.704,15.014c-1.195,2.916 -4.058,4.971 -7.405,4.971c-4.42,0 -8.003,-3.583 -8.003,-8.003c0,-4.186 3.215,-7.616 7.31,-7.968c-2.039,2.806 -1.801,6.751 0.729,9.281c1.994,1.994 4.867,2.562 7.369,1.719Z"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      ></path>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  ),
})

const MoonOutline: FC<IconProps> = (props) => {
  return <CustomIcon as={MoonOutlineIcon} {...props} />
}

export default memo(MoonOutline)
