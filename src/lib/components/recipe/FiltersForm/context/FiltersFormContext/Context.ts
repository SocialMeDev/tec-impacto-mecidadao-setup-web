import { createContext } from 'react'

export interface IFiltersFormContext {
  showResetFilters: boolean
  isSubmiting: boolean
  isOpen: boolean
  title: string
  subTitle?: string
  formValues: object
  onClose: () => void
  onOpen: () => void
  resetFilters: () => void
  onFilter: () => void
  setFormValues: (values: object) => void
}

const defaultValues = {
  showResetFilters: false,
  isSubmiting: false,
  isOpen: false,
  title: '',
  subTitle: '',
  formValues: {},
  onClose: () => {},
  onOpen: () => {},
  resetFilters: () => {},
  onFilter: () => {},
  setFormValues: () => {},
}

const FiltersFormContext = createContext<IFiltersFormContext>(defaultValues)

export default FiltersFormContext
