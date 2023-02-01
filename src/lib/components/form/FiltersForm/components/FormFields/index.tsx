import { FC, memo, ReactElement, useCallback } from 'react'
import { Stack, Box } from '@chakra-ui/react'

import Input from './components/Input'
import MaskedInput from './components/MaskedInput'
import Select from './components/Select'
import { IFiltersFormFields } from '../../types'
import { useFiltersForm } from '../../context/FiltersFormContext/Provider'

type Props = {
  fields: IFiltersFormFields[]
}

type IndexObject = {
  [index: string]: string
}

type Fields = {
  [index: string]: ReactElement
}

const FilterFormFields: FC<Props> = ({ fields = [] }) => {
  const { formValues, setFormValues } = useFiltersForm()

  const changeFilters = useCallback((name: string, value: string) => {
    setFormValues((oldValues: any) => {
      return { ...oldValues, [name]: value }
    })
  }, [])

  const renderField = useCallback(({ type, ...props }: any) => {
    const onChange = (value: string) => {
      changeFilters(props.name, value)
    }

    const fields: Fields = {
      select: <Select onChange={onChange} {...props} />,
      input: <Input onChange={onChange} {...props} />,
      maskedInput: <MaskedInput onChange={onChange} {...props} />,
    }

    return fields[type]
  }, [])

  return (
    <Stack>
      {fields.map((field) => {
        const indexObject: IndexObject = { ...formValues }
        let defaultValue: string

        if (field.mask) {
          defaultValue = field.mask(indexObject[field.name])
        } else {
          defaultValue = indexObject[field.name]
        }

        return <Box key={field.name}>{renderField({ ...field, defaultValue })}</Box>
      })}
    </Stack>
  )
}

export default memo(FilterFormFields)
