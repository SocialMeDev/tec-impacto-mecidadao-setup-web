import { memo } from 'react'
import { Button, Flex } from '@chakra-ui/react'

import { Search } from '@lib/components/icons'
import ResetFiltersButton from '../ResetFiltersButton'
import { useFiltersForm } from '../../context/FiltersFormContext/Provider'

const FilterFooterButtons = () => {
  const { isSubmiting, onClose } = useFiltersForm()
  return (
    <Flex gap={2}>
      <ResetFiltersButton />

      <Button variant="outline" onClick={onClose}>
        Cancelar
      </Button>
      <Button isLoading={isSubmiting} leftIcon={<Search />} type="submit">
        Filtrar
      </Button>
    </Flex>
  )
}

export default memo(FilterFooterButtons)
