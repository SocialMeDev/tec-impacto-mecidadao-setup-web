import { FormatedFile } from '../..'

export default function formatFile(file: File): FormatedFile {
  const url = URL.createObjectURL(file)

  const { name, size } = file

  const splitedFilename = name.split('.')
  const extension = splitedFilename[splitedFilename.length - 1]

  const formatedFile = {
    file,
    name,
    url,
    size,
    extension,
  }

  return formatedFile
}
