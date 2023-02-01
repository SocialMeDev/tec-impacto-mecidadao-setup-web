export type Option = {
  label: string
  value: any
}

export type ICommonFieldsProps = {
  name: string
  helperText: string
  label: string
  options: Option[]
  onChange: (value: string) => void
}

export type IFiltersFormFields = {
  type: string
  name: string
  label: string
  options?: Option[]
  mask?: (value: string) => string
}
