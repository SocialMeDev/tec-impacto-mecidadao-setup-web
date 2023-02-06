import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'
import { Icon } from 'lib/components'

const SettingsIcon = createIcon({
  displayName: 'SettingsIcon',
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
        <path d="M19.815 13.79l.04-.02 0-.01c.66-.17 1.13-.77 1.13-1.46v-.66l0-.01c0-.69-.47-1.29-1.14-1.46l-.05-.02 -.01-.01c-.89-.23-1.43-1.13-1.21-2.02 .03-.16.1-.31.18-.45l.02-.04 0-.01c.35-.6.26-1.36-.23-1.85l-.47-.47 0 0c-.49-.49-1.25-.58-1.84-.23l-.05.02 0-.01c-.79.47-1.81.21-2.28-.57 -.09-.15-.15-.3-.19-.46L13.69 4l0 0c-.17-.67-.77-1.14-1.46-1.14h-.66l-.01-.001c-.69-.01-1.29.46-1.46 1.13l-.02.04 0-.01c-.23.88-1.13 1.42-2.02 1.2 -.16-.04-.31-.11-.45-.19l-.04-.03 -.01-.01c-.6-.36-1.36-.27-1.85.22l-.47.46 -.01 0c-.49.48-.58 1.24-.23 1.83l.02.04 -.01-.01c.47.78.21 1.8-.57 2.27 -.14.08-.3.14-.45.18l-.05.01 -.01 0c-.67.16-1.14.76-1.14 1.45v.65l-.01 0c-.01.68.46 1.28 1.13 1.45l.04.01 0 0c.88.22 1.42 1.12 1.2 2 -.04.15-.11.3-.19.44l-.03.04 0-.01c-.36.59-.27 1.34.22 1.83l.46.46 -.01-.01c.48.48 1.24.57 1.83.22l.04-.03 -.01 0c.78-.48 1.8-.22 2.27.56 .08.13.14.29.18.44l.01.04 -.01-.01c.16.66.76 1.13 1.45 1.13h.65L12 20.64c.68 0 1.28-.47 1.45-1.14l.01-.05 -.01 0c.22-.89 1.12-1.43 2-1.21 .15.03.31.1.45.18l.04.02 0 0c.59.35 1.34.26 1.83-.23l.46-.47 -.01 0c.48-.49.57-1.25.22-1.84l-.03-.05 -.01-.01c-.48-.79-.22-1.81.56-2.28 .13-.09.29-.15.44-.19Z" />
        <path d="M11.99 9.92a2.07 2.07 0 1 0 0 4.15 2.07 2.07 0 1 0 0-4.16Z" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24H0Z" />
    </>
  ),
})

const Settings: FC<IconProps> = (props) => {
  return <Icon as={SettingsIcon} {...props} />
}

export default memo(Settings)
