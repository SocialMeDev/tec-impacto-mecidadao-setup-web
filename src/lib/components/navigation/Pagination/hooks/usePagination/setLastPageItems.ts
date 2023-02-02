import { ReturnedPages } from '.'

export default function setLastPages(pages: ReturnedPages[], maxPages: number): ReturnedPages[] {
  pages[0] = { label: 1, value: 1 }
  pages[1] = { label: maxPages - 4, value: maxPages - 4 }
  pages[2] = { label: maxPages - 3, value: maxPages - 3 }
  pages[3] = { label: maxPages - 2, value: maxPages - 2 }
  pages[4] = { label: maxPages - 1, value: maxPages - 1 }
  pages[5] = { label: maxPages, value: maxPages }

  return pages
}
