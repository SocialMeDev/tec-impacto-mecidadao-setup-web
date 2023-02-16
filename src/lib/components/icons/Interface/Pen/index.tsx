import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import CustomIcon from '../../CustomIcon'

const PenIcon = createIcon({
  displayName: 'PenIcon',
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
        <path d="M8.523 20h-4.523v-4.523l-3.8959e-08-.000368684c-7.0004e-08-.463616.184282-.908219.512261-1.23589l10.7277-10.7277 -1.42634e-07 1.42908e-07c.681591-.6829 1.78773-.683961 2.47063-.00237033 .000790772.000789256.00158079.00157927.00237004.00237004l2.774 2.774 5.85439e-08 5.84317e-08c.6829.681591.683961 1.78773.00236993 2.47063 -.000789257.000790772-.00157927.00158079-.00237004.00237004l-10.728 10.728 -2.71915e-08 2.7154e-08c-.327991.327537-.772472.511659-1.236.512Z" />
        <line x1="13" x2="18" y1="6" y2="11" />
        <line x1="9" x2="12" y1="15" y2="12" />
      </g>
      <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" />
    </>
  ),
})

const Pen: FC<IconProps> = (props) => {
  return <CustomIcon as={PenIcon} {...props} />
}

export default memo(Pen)
