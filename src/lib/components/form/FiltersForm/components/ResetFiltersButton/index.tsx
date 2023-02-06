import { memo } from 'react'
import { Button } from '@chakra-ui/react'

import { SpinningArrows } from '@lib/assets/icons'
import { useFiltersForm } from '../../context/FiltersFormContext/Provider'

const ResetFiltersButton = () => {
  const { showResetFilters, resetFilters } = useFiltersForm()

  if (!showResetFilters) return null

  return (
    <Button leftIcon={<SpinningArrows />} colorScheme="red" variant="ghost" onClick={resetFilters}>
      Resetar filtros
    </Button>
  )
}

export default memo(ResetFiltersButton)
