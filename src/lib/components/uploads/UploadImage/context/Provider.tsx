import { useRef, useContext, useState, FC, ChangeEvent, ReactElement } from 'react'
import { Input, useDisclosure } from '@chakra-ui/react'

import UploadImageContext, { IUploadImageContext } from './Context'
import { Image, MainImage, UploadImageProviderProps } from '../types'

type Props = UploadImageProviderProps & {
  children: ReactElement
  images?: Image[]
}

const UploadImageProvider: FC<Props> = ({
  children,
  onUpdate,
  onDelete,
  onUpload,
  isLoading,
  defaultImage = '',
  images = [],
  size = '125px',
  rounded = 'full',
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [view, setView] = useState('Gallery')
  const [image, setImage] = useState<MainImage>({ fileUrl: defaultImage })

  const inputRef = useRef<HTMLInputElement | null>(null)

  const openModal = () => onOpen()

  const closeModal = () => {
    setView('Gallery')
    onClose()
  }

  const handleOnClick = () => {
    if (inputRef.current) inputRef.current.value = ''
    inputRef.current?.click()
    openModal()
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!defaultImage) openModal()

    if (!event.target.files) return

    const file = event.target.files[0]

    const fileUrl = URL.createObjectURL(file)

    setImage({ file, fileUrl })
    setView('Cropper')
  }

  return (
    <UploadImageContext.Provider
      value={{
        isOpen,
        isLoading,
        images,
        image,
        size,
        rounded,
        view,
        openModal,
        closeModal,
        setImage,
        setView,
        onUpdate,
        onDelete,
        onUpload,
        handleOnClick,
        handleOnChange,
      }}
    >
      <>
        <Input ref={inputRef} onChange={handleOnChange} type="file" accept="images/*" hidden />
        {children}
      </>
    </UploadImageContext.Provider>
  )
}

export default UploadImageProvider

export const useUploadImage = () => useContext<IUploadImageContext>(UploadImageContext)
