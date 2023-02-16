import { FC, memo } from 'react'
import { SelectProps } from '@chakra-ui/react'

import { Select, FormItem } from '@lib/components'
import { ICommonFieldsProps } from '../../../../types'

type Props = SelectProps & ICommonFieldsProps

const DynamicSelect: FC<Props> = ({ helperText, label, onChange, options, name, ...props }) => {
  return (
    <FormItem label={label} helperText={helperText} htmlFor={name}>
      <Select onChange={(value) => onChange(value)} options={options} {...props} />
    </FormItem>
  )
}

export default memo(DynamicSelect)
