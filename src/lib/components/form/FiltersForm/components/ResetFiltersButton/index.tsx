import { memo } from 'react'
import { Button } from '@chakra-ui/react'

import { RefreshRotate3 } from 'lib/components/icons/Interface'
import { useFiltersForm } from '../../context/FiltersFormContext/Provider'

const ResetFiltersButton = () => {
  const { showResetFilters, resetFilters } = useFiltersForm()

  if (!showResetFilters) return null

  return (
    <Button leftIcon={<RefreshRotate3 />} colorScheme="red" variant="ghost" onClick={resetFilters}>
      Resetar filtros
    </Button>
  )
}

export default memo(ResetFiltersButton)
