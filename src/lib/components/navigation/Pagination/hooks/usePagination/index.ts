import { useState, useEffect } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import setBegginerPageItems from './setBegginerPageItems'
import setMiddlePageItems from './setMiddlePageItems'
import setLastPageItems from './setLastPageItems'

type Params = {
  totalItems: number
  limit: number
  currentPage: number
}

export type ReturnedPages = {
  value: number
  label: number
}

type Return = {
  selectedPages: ReturnedPages[]
}

const usePagination = ({ totalItems, limit, currentPage }: Params): Return => {
  const [selectedPages, setSelectedPages] = useState<ReturnedPages[]>([])

  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    function chooseBegginerPageItems(maxPages = 0) {
      const pagesQuantity = maxPages < 7 ? maxPages : 7

      const pages = setBegginerPageItems(pagesQuantity, maxPages)

      if (isMobile) pages.splice(5, 2)

      return pages
    }

    function chooseMiddlePageItems(maxPages: number): ReturnedPages[] {
      let pages: ReturnedPages[] = []

      pages = setMiddlePageItems(pages, currentPage, maxPages)

      if (isMobile) {
        pages.splice(0, 1)
        pages.splice(5, 1)
      }

      return pages
    }

    function chooseLastPageItems(maxPages: number): ReturnedPages[] {
      let pages: ReturnedPages[] = []

      pages = setLastPageItems(pages, maxPages)

      if (isMobile) pages.splice(2, 2)

      return pages
    }

    function TreatedPageItemsInArray() {
      const maxPages = Math.ceil(totalItems / limit)

      const middlePageNeighbor = 3

      let currentPages: ReturnedPages[] = []

      if (maxPages <= 4 || currentPage < 4) {
        currentPages = chooseBegginerPageItems(maxPages)
      } else if (currentPage < maxPages - middlePageNeighbor) {
        currentPages = chooseMiddlePageItems(maxPages)
      } else {
        currentPages = chooseLastPageItems(maxPages)
      }

      setSelectedPages(currentPages)
    }

    TreatedPageItemsInArray()
  }, [isMobile, currentPage, limit, totalItems])

  return { selectedPages }
}

export default usePagination
