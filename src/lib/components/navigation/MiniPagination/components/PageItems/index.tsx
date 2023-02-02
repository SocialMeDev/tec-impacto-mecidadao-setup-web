import { FC, memo } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import ArrowButton from './components/ArrowButton'
import { numberWithPunctuation } from '@lib/utils/transforms/number'
import { ArrowLeft, ArrowRight } from '@lib/assets/icons'

type Props = {
  currentPage: number
  maxPages: number
  onChangePage: (nextPage: number) => void
}
const PageItems: FC<Props> = ({ currentPage, onChangePage, maxPages }) => {
  const iconSize = 8
  const textSize = 'md'

  return (
    <Flex align="center" gap={4}>
      <ArrowButton
        Icon={ArrowLeft}
        iconSize={iconSize}
        isDisabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
        aria-label={currentPage === 1 ? '1° página' : `Voltar para a página ${currentPage - 1}`}
      />

      <Text fontSize={textSize}>{numberWithPunctuation(currentPage)}</Text>
      <Text fontSize={textSize}>/</Text>
      <Text fontSize={textSize}>{numberWithPunctuation(maxPages)}</Text>

      <ArrowButton
        Icon={ArrowRight}
        iconSize={iconSize}
        aria-label={maxPages <= currentPage ? 'Ultima página' : `Ir para a página ${currentPage + 1}`}
        isDisabled={maxPages <= currentPage}
        onClick={() => onChangePage(currentPage + 1)}
      />
    </Flex>
  )
}

export default memo(PageItems)
