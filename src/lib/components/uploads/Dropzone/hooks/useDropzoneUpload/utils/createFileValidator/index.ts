import { FileValidators, DropzoneFiles } from '../../../../types'

export default function createFileValidator({ acceptFiles, maxSize }: FileValidators) {
  const isValidExtension = (fileExtension: string) => {
    if (acceptFiles.length === 0) return true
    return acceptFiles.includes(fileExtension)
  }

  const isValidSize = (filesize: number) => {
    if (maxSize === 0) return true
    return maxSize >= filesize
  }

  const validateFile = (file: DropzoneFiles) => {
    const isFileAccept = isValidExtension(file.extension.toUpperCase())
    const isMaxSizeReach = isValidSize(file.size)

    if (!isFileAccept) {
      alert('Extensão não permitida.')
      return false
    }

    if (!isMaxSizeReach) {
      alert('Tamanho do arquivo excedito.')
      return false
    }

    return true
  }

  return validateFile
}
