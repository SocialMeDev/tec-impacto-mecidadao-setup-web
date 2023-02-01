import { removeEverythingThatIsNotNumber } from 'lib/utils/transforms/string'

type Filters = {
  [index: string]: string
}

type PossibleFieldsToBeFormated = {
  name: string
  format: (value: string) => string
}

const possibleFieldsToBeFormated: PossibleFieldsToBeFormated[] = [
  { name: 'cpf_number', format: removeEverythingThatIsNotNumber },
  { name: 'cpf', format: removeEverythingThatIsNotNumber },
  { name: 'cns', format: removeEverythingThatIsNotNumber },
  { name: 'person_cpf', format: removeEverythingThatIsNotNumber },
]

export default function checkFieldsToBeFormated(filters: object): object {
  const formatedFilters: Filters = { ...filters }

  possibleFieldsToBeFormated.forEach(({ name, format }) => {
    if (formatedFilters[name]) formatedFilters[name] = format(formatedFilters[name])
  })

  return formatedFilters
}
