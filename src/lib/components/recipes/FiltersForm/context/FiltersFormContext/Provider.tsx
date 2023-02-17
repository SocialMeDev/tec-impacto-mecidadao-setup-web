import { useDisclosure } from '@chakra-ui/react'
import { useContext, FC, ReactElement, useState, useCallback } from 'react'
import SidebarContext, { IFiltersFormContext } from './Context'
import FiltersFormContext from './Context'
import checkFieldsToBeFormated from './utils/checkFieldsToBeFormated'

type Props = {
  children: ReactElement
  closeWhenSubmit?: boolean
  title: string
  subTitle?: string
  initialFilters: object
  filters: object
  onSubmit: (filters: object) => void
}

const FiltersFormProvider: FC<Props> = ({
  children,
  closeWhenSubmit,
  title,
  subTitle,
  initialFilters,
  filters,
  onSubmit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [showResetFilters, setShowResetFilters] = useState(false)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [formValues, setFormValues] = useState(filters)

  const onFilter = () => {
    setIsSubmiting(true)
    const formatedFilters = checkFieldsToBeFormated(formValues)
    onSubmit(formatedFilters)
    setIsSubmiting(false)
    setShowResetFilters(true)
    if (closeWhenSubmit) onClose()
  }

  const resetFilters = useCallback(() => {
    onClose()
    setFormValues(initialFilters)
    onSubmit(initialFilters)
    setShowResetFilters(false)
  }, [])

  return (
    <FiltersFormContext.Provider
      value={{
        isSubmiting,
        isOpen,
        title,
        subTitle,
        showResetFilters,
        onOpen,
        onClose,
        resetFilters,
        onFilter,
        formValues,
        setFormValues,
      }}
    >
      {children}
    </FiltersFormContext.Provider>
  )
}

export default FiltersFormProvider

export const useFiltersForm = () => useContext<IFiltersFormContext>(SidebarContext)
