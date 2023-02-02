import { memo, useMemo, FC } from 'react'
import { Flex } from '@chakra-ui/react'

import PageItems from './components/PageItems'
import PageShortCut from './components/PageShortCut'

type Props = {
  currentPage: number
  limit?: number
  totalItems: number
  onChangePage: (nextPage: number) => void
}

const MiniPagination: FC<Props> = ({ currentPage = 1, limit = 10, totalItems, onChangePage }) => {
  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  if (totalItems <= 0) return null

  return (
    <Flex p={2} justify="center" align="center" direction={{ base: 'column', md: 'row' }} gap={2}>
      <PageItems maxPages={maxPages} currentPage={currentPage} onChangePage={onChangePage} />
      <PageShortCut limit={limit} totalItems={totalItems} onChangePage={onChangePage} />
    </Flex>
  )
}

export default memo(MiniPagination)
