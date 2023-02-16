import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import CustomIcon from '../../CustomIcon'

const SpinningArrowsIcon = createIcon({
  displayName: 'SpinningArrowsIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <use xlinkHref="#a"></use>
        <use xlinkHref="#a"></use>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 20l-4.22276e-07-3.51434e-11c2.93017.000243942 5.62601-1.60146 7.027-4.175"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 12v0c0-4.41828-3.58172-8-8-8"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 4l-2.77107e-07-2.305e-11c-2.93017-.000243686-5.62601 1.60146-7.027 4.175"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 12l9.14824e-14 1.20797e-06c6.67141e-07 4.41828 3.58172 8 8 8"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.973 8.175l-1.30905e-08 2.40566e-08c2.11181-3.8809 6.96987-5.31504 10.8508-3.20322 2.5744 1.40087 4.17667 4.09736 4.17622 7.02822"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 12l-9.35002e-08.0012219c-6.67141e-07 4.41828 3.58172 8 8 8 2.93087 4.42549e-07 5.62711-1.60268 7.02759-4.1773"
        ></path>
        <polyline
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          points="8.047,8.175 4.512,8.175 4.512,4.639"
        ></polyline>
        <polyline
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          points="15.953,15.825 19.488,15.825 19.488,19.361"
        ></polyline>
      </g>
    </>
  ),
})

const SpinningArrows: FC<IconProps> = (props) => {
  return <CustomIcon as={SpinningArrowsIcon} {...props} />
}

export default memo(SpinningArrows)
