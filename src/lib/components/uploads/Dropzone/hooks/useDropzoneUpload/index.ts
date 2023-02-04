import createFileValidator from './utils/createFileValidator'
import formatFile from './utils/formatFile'

export type FormatedFile = {
  file: File
  extension: string
  url: string
  size: number
  name: string
}

export type FileValidators = {
  acceptFiles: string[]
  maxSize: number
}

type DispatchInputFileUpload = (files: FileList) => FormatedFile[]

export const useDropzoneUpload = ({ acceptFiles, maxSize }: FileValidators): DispatchInputFileUpload => {
  const validateFile = createFileValidator({ acceptFiles, maxSize })

  const dispatchInputFileUpload = (files: FileList) => {
    let formatedFiles: FormatedFile[] = Array.from(files).map((file) => {
      return formatFile(file)
    })

    formatedFiles = formatedFiles.filter((file) => {
      return validateFile(file)
    })

    return formatedFiles
  }

  return dispatchInputFileUpload
}
