import { ReturnedPages } from '.'

export default function setMiddlePageItems(
  choosePages: ReturnedPages[],
  currentPage: number,
  maxPages: number
): ReturnedPages[] {
  choosePages[0] = { label: 1, value: 1 }
  choosePages[1] = { label: currentPage - 2, value: currentPage - 2 }
  choosePages[2] = { label: currentPage - 1, value: currentPage - 1 }
  choosePages[3] = { label: currentPage, value: currentPage }
  choosePages[5] = { label: currentPage + 1, value: currentPage + 1 }
  choosePages[6] = { label: currentPage + 2, value: currentPage + 2 }
  choosePages[7] = { label: maxPages, value: maxPages }

  return choosePages
}
