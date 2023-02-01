import { FC, memo } from 'react'
import { SelectProps } from '@chakra-ui/react'

import { CustomSelect } from '@lib/components/inputs'
import { ICommonFieldsProps } from '@lib/components/form/FiltersForm/types'
import { FormItem } from '@lib/components'

type Props = SelectProps & ICommonFieldsProps

const DynamicSelect: FC<Props> = ({ helperText, label, onChange, options, name, ...props }) => {
  return (
    <FormItem label={label} helperText={helperText} htmlFor={name}>
      <CustomSelect onChange={(value) => onChange(value)} options={options} {...props} />
    </FormItem>
  )
}

export default memo(DynamicSelect)
