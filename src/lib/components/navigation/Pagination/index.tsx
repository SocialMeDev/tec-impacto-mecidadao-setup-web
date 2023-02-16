import { memo, Fragment, FC } from 'react'
import { Flex } from '@chakra-ui/react'

import { PaginationDescription } from 'lib/components'
import usePagination from './hooks/usePagination'
import LimitSelect from './components/LimitSelect'
import PageItems from './components/PageItems'
import PageShortCut from './components/PageShortCut'

type Params = {
  limit: number
  page: number
}

type Props = {
  currentPage: number
  limitOptions?: number[]
  limit: number
  totalItems: number
  showDescription?: boolean
  descriptionLabel?: string
  onChangePage: (newPage: number) => void
  onChangeLimitAndPage: ({ limit, page }: Params) => void
}

const Pagination: FC<Props> = ({
  currentPage = 1,
  limitOptions = [10, 20, 50, 100],
  limit = 10,
  totalItems,
  onChangePage,
  onChangeLimitAndPage,
  showDescription = true,
  descriptionLabel,
  ...rest
}) => {
  const { selectedPages } = usePagination({
    currentPage,
    limit,
    totalItems,
  })

  const handleChangeLimit = (newLimit: number) => {
    onChangeLimitAndPage({ limit: newLimit, page: 1 })
  }

  return (
    <Fragment>
      {totalItems > 0 && (
        <Flex
          p={4}
          flexWrap="wrap"
          justify={showDescription ? 'space-between' : 'center'}
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={2}
          {...rest}
        >
          <Fragment>
            {showDescription && (
              <PaginationDescription
                limit={limit}
                page={currentPage}
                totalItems={totalItems}
                label={descriptionLabel}
              />
            )}

            <Flex align="center" flexWrap="wrap" gap={2}>
              <PageItems currentPage={currentPage} selectedPages={selectedPages} onChangePage={onChangePage} />

              {handleChangeLimit && (
                <LimitSelect limitOptions={limitOptions} limit={limit} onChangeLimit={handleChangeLimit} />
              )}

              <PageShortCut totalItems={totalItems} limit={limit} onChangePage={onChangePage} />
            </Flex>
          </Fragment>
        </Flex>
      )}
    </Fragment>
  )
}

export default memo(Pagination)
