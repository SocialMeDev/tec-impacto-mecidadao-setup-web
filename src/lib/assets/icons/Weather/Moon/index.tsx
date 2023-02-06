import { FC, memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import { Icon } from 'lib/components'
import { CustomIconProps } from '@lib/protocols/icons/CustomIconProps'

const Moon_Outline = createIcon({
  displayName: 'Moon_Outline',
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

const Moon_Solid = createIcon({
  displayName: 'Moon_Solid',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M19.704,15.014c-1.195,2.916 -4.058,4.971 -7.405,4.971c-4.42,0 -8.003,-3.583 -8.003,-8.003c0,-4.186 3.215,-7.616 7.31,-7.968c-2.039,2.806 -1.801,6.751 0.729,9.281c1.994,1.994 4.867,2.562 7.369,1.719Z"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="currentColor"
        strokeLinejoin="round"
      ></path>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  ),
})

const Moon: FC<CustomIconProps> = ({ variant, ...props }) => {
  if (variant === 'solid') {
    return <Icon as={Moon_Solid} {...props} />
  }
  return <Icon as={Moon_Outline} {...props} />
}

export default memo(Moon)
