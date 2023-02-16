export type DropzoneFiles = {
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
