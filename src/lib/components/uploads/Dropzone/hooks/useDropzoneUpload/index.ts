import createFileValidator from './utils/createFileValidator'
import formatFile from './utils/formatFile'
import { DropzoneFiles, FileValidators } from '../../types'

type DispatchInputFileUpload = (files: FileList) => DropzoneFiles[]

export const useDropzoneUpload = ({ acceptFiles, maxSize }: FileValidators): DispatchInputFileUpload => {
  const validateFile = createFileValidator({ acceptFiles, maxSize })

  const dispatchInputFileUpload = (files: FileList) => {
    let formatedFiles: DropzoneFiles[] = Array.from(files).map((file) => {
      return formatFile(file)
    })

    formatedFiles = formatedFiles.filter((file) => {
      return validateFile(file)
    })

    return formatedFiles
  }

  return dispatchInputFileUpload
}
