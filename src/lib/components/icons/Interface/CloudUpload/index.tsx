import { FC, memo } from 'react'
import { createIcon, IconProps } from '@chakra-ui/icons'

import CustomIcon from '../../CustomIcon'

const CloudUploadIcon = createIcon({
  displayName: 'CloudUploadIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="15"
        y1="15"
        x2="12"
        y2="12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="12"
        y1="12"
        x2="9"
        y2="15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="12"
        y1="20"
        x2="12"
        y2="12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8,19H6a4,4,0,0,1-4-4H2a4,4,0,0,1,4-4H6l-.01-.07036A6.07106,6.07106,0,0,1,12,4h0a6.07106,6.07106,0,0,1,6.01,6.92964L18,11h0a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4H16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" />
    </>
  ),
})

const CloudUpload: FC<IconProps> = (props) => {
  return <CustomIcon as={CloudUploadIcon} {...props} />
}

export default memo(CloudUpload)
