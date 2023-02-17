import { FC } from 'react'
import { Input } from '@chakra-ui/react'

import { FormItem, MaskedInput } from '@lib/components'
import { cnpjMask, cpfMask, brazilianDateMask, cnsMask, rgMask } from '@lib/utils/masks'

type QuestionProps = {
  register: any
  errors: any
}

export const NameQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Nome da pessoa" htmlFor="name" error={errors.name}>
      <Input {...register('name')} />
    </FormItem>
  )
}

export const CPFQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Número do CPF" htmlFor="cpf_number" error={errors.cpf_number}>
      <MaskedInput inputMode="numeric" mask={cpfMask} {...register('cpf_number')} />
    </FormItem>
  )
}

export const CNPJQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Número do CNPJ" htmlFor="cnpj_number" error={errors.cnpj_number}>
      <MaskedInput inputMode="numeric" mask={cnpjMask} {...register('cnpj_number')} />
    </FormItem>
  )
}

export const CNSQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Número do CNS" htmlFor="cns_number" error={errors.cns_number}>
      <MaskedInput inputMode="numeric" mask={cnsMask} {...register('cns_number')} />
    </FormItem>
  )
}

export const RGQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Número do RG" htmlFor="rg_number" error={errors.rg_number}>
      <MaskedInput inputMode="numeric" mask={rgMask} {...register('rg_number')} />
    </FormItem>
  )
}

export const BirthDateQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="   Data de nascimento" htmlFor="birth_date" error={errors.birth_date}>
      <MaskedInput inputMode="numeric" mask={brazilianDateMask} {...register('birth_date')} />
    </FormItem>
  )
}

export const MotherNameQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Nome da mãe" htmlFor="mother_name" error={errors.mother_name}>
      <Input {...register('mother_name')} />
    </FormItem>
  )
}

export const FatherNameQuestion: FC<QuestionProps> = ({ register, errors }) => {
  return (
    <FormItem label="Nome do pai" htmlFor="father_name" error={errors.father_name}>
      <Input {...register('father_name')} />
    </FormItem>
  )
}
