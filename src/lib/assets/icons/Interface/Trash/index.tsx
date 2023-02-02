import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'
import { Icon } from 'lib/components'

const Trash = createIcon({
  displayName: 'Trash',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M6 9v10l2.30926e-14 3.01992e-07c1.66785e-07 1.10457.895431 2 2 2h8l-8.74228e-08-7.10543e-15c1.10457 4.82823e-08 2-.89543 2-2v-10m-4 1v7m-4-7v7m-5.5-11h15m-11.5 0l.544-1.632 1.1981e-08-3.59718e-08c.272144-.817086 1.03679-1.36821 1.898-1.368h3.116l3.75414e-08-4.65716e-11c.861951-.00106928 1.62762.550215 1.9 1.368l.542 1.632"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      ></path>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

const TrashIcon: FC<IconProps> = (props) => {
  return <Icon as={Trash} {...props} />
}

export default memo(TrashIcon)
