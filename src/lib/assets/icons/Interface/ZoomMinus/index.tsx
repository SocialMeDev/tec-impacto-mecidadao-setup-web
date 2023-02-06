import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import { Icon } from 'lib/components'

const ZoomMinusIcon = createIcon({
  displayName: 'ZoomMinusIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.1931 5.58187c2.33182 2.33182 2.33182 6.11245 0 8.44427 -2.33182 2.33182-6.11245 2.33182-8.44427 0 -2.33182-2.33182-2.33182-6.11245-1.77636e-15-8.44427 2.33182-2.33182 6.11245-2.33182 8.44427-1.77636e-15"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.15 14.06l5.85 5.93"
        />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h4" />
      </g>
    </>
  ),
})

function ZoomMinus({ ...rest }) {
  return <Icon as={ZoomMinusIcon} {...rest} />
}

export default memo(ZoomMinus)
