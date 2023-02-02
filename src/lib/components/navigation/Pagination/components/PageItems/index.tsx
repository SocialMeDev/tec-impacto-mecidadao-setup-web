import { FC, Fragment, memo } from 'react'
import { Button } from '@chakra-ui/react'

import { formatNumberWithPunctuation } from '@lib/utils/transforms/number'
import { ReturnedPages } from '../../hooks/usePagination'

type Props = {
  currentPage: number
  selectedPages: ReturnedPages[]
  onChangePage: (newPage: number) => void
}

const PageItems: FC<Props> = ({ currentPage, selectedPages, onChangePage }) => {
  return (
    <Fragment>
      {selectedPages.map(({ label, value }) => {
        const isCurrentPage = value === currentPage

        return (
          <Button
            key={value}
            onClick={() => onChangePage(value)}
            color={isCurrentPage ? 'light' : 'primary'}
            bg={isCurrentPage ? 'primary' : 'light'}
            minWidth="min-content"
            borderWidth="1px"
            borderColor="primary"
            _hover={{ color: 'light', bg: 'primary' }}
          >
            {isNaN(label) ? label : formatNumberWithPunctuation(label)}
          </Button>
        )
      })}
    </Fragment>
  )
}

export default memo(PageItems)
