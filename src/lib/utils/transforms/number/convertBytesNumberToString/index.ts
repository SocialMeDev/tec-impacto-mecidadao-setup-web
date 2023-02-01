type ReturnedBy = 'KB' | 'MB' | 'GB' | 'TB'

type PossibleFormats = {
  [index: string]: number
}

export function convertBytesNumberToString(bytes: number, returnBy?: ReturnedBy) {
  function chooseBetterFormatForBytes(bytes: number): string {
    if (bytes > 1000 * 1000 * 1000) {
      return 'GB'
    } else if (bytes > 1000 * 1000) {
      return 'MB'
    }

    return 'KB'
  }

  const betterFormat = returnBy || chooseBetterFormatForBytes(bytes)

  const possibleFormats: PossibleFormats = {
    KB: bytes / 1000,
    MB: bytes / 1000 / 1000,
    GB: bytes / 1000 / 1000 / 1000,
  }
  const formatedBytes = possibleFormats[betterFormat]

  return `${formatedBytes.toFixed(2)} ${betterFormat}`
}
