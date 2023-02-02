import { ReturnedPages } from '.'

export default function setBegginPageItems(pagesQuantity: number, maxPages: number): ReturnedPages[] {
  const array: ReturnedPages[] = Array.from({ length: pagesQuantity }, (item, index) => {
    const value = index + 1
    return {
      label: value,
      value,
    }
  })

  array.pop()
  array.push({ label: maxPages, value: maxPages })

  return array
}
