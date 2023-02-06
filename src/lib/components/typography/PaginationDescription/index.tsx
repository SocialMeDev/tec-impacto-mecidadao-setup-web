import { FC, memo, useMemo } from 'react'
import { Text, Skeleton } from '@chakra-ui/react'
import { formatNumberWithPunctuation } from '@lib/utils/transforms/number'

type Props = {
  isLoading?: boolean
  page: number
  limit: number
  totalItems: number
  label?: string
}

const PaginationDescription: FC<Props> = ({ isLoading = false, page, limit, totalItems, label = 'registros' }) => {
  const { showingTo, showingFrom, total } = useMemo(() => {
    return {
      showingTo: formatNumberWithPunctuation(page === 1 ? 1 : limit * page - limit + 1),
      showingFrom: formatNumberWithPunctuation(limit * page > totalItems ? totalItems : limit * page),
      total: formatNumberWithPunctuation(totalItems),
    }
  }, [page, limit, totalItems])

  if (totalItems <= 0) return null

  return (
    <Skeleton isLoaded={!isLoading}>
      <Text>
        Mostrando de {showingTo} a {showingFrom} de {total} {label}
      </Text>
    </Skeleton>
  )
}

export default memo(PaginationDescription)
