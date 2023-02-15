import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'
import { Icon } from 'lib/components'

const SunSolidIcon = createIcon({
  displayName: 'SunSolidIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="currentColor" strokeLinejoin="round">
        <line x1="12" x2="12" y1="18.25" y2="20.75"></line>
        <line x1="12" x2="12" y1="3.25" y2="5.75"></line>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="7.58" x2="5.81" y1="16.42" y2="18.19"></line>
        <line x1="18.19" x2="16.42" y1="5.81" y2="7.58"></line>
        <line x1="5.75" x2="3.25" y1="12" y2="12"></line>
        <line x1="20.75" x2="18.25" y1="12" y2="12"></line>
        <line x1="7.58" x2="5.81" y1="7.58" y2="5.81"></line>
        <line x1="18.19" x2="16.42" y1="18.19" y2="16.42"></line>
      </g>
      <path fill="none" d="M24 0v24h-24v-24h24Z"></path>
    </>
  ),
})

const SunSolid: FC<IconProps> = (props) => {
  return <Icon as={SunSolidIcon} {...props} />
}

export default memo(SunSolid)
