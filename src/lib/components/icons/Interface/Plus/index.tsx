import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import CustomIcon from '../../CustomIcon'

const PlusIcon = createIcon({
  displayName: 'PlusIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12h-8"></path>
      </g>
    </>
  ),
})

const Plus: FC<IconProps> = (props) => {
  return <CustomIcon as={PlusIcon} {...props} />
}

export default memo(Plus)
