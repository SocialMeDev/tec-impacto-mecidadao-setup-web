import { FC, useRef, DragEvent, ChangeEvent, memo } from 'react'
import { Input } from '@chakra-ui/react'

import DropzoneContent from './components/DropzoneContent'
import DropzoneWrapper from './components/DropzoneWrapper'
import { useDropzoneUpload, FormatedFile } from './hooks/useDropzoneUpload'

type Props = {
  multiple?: boolean
  acceptFiles?: string[]
  maxSize?: number
  onUpload: (files: FormatedFile[]) => Promise<void>
}

const Dropzone: FC<Props> = ({ onUpload, acceptFiles = [], maxSize = 0, multiple = true }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  acceptFiles = acceptFiles.map((file) => file.toUpperCase())

  const upload = useDropzoneUpload({ acceptFiles, maxSize })

  const handleInputClick = (): void => {
    if (inputRef.current) inputRef.current.value = ''
    inputRef.current?.click()
  }

  const handleOnUpload = async (formatedFiles: FileList): Promise<void> => {
    const files = upload(formatedFiles)
    await onUpload(files)
  }

  const handleOnDrop = async (event: DragEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault()
    if (event.dataTransfer && event.dataTransfer.files.length != 0) {
      await handleOnUpload(event.dataTransfer.files)
    }
  }

  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    event.preventDefault()
    const fileList = event.target.files
    if (fileList && fileList.length != 0) await handleOnUpload(fileList)
  }

  return (
    <>
      <DropzoneWrapper onClick={handleInputClick} onDrop={handleOnDrop}>
        <DropzoneContent acceptFiles={acceptFiles} maxSize={maxSize} />
      </DropzoneWrapper>

      <Input ref={inputRef} type="file" multiple={multiple} hidden onChange={handleOnChange} />
    </>
  )
}

export default memo(Dropzone)
