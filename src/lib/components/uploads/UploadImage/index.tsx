import { FC, memo } from 'react'

import UploadImageProvider from './context/Provider'
import Component from './Component'
import { UploadImageProviderProps } from './types'

const UploadImage: FC<UploadImageProviderProps> = (props) => {
  return (
    <UploadImageProvider {...props}>
      <Component />
    </UploadImageProvider>
  )
}

export default memo(UploadImage)
