import { intlFormatDistance } from 'date-fns'

type ParameterDate = Date | number

type FormaterOptions = {
  unit?: string | undefined
  locale?: string | string[] | undefined
  localeMatcher?: string | undefined
  numeric?: string | undefined
  style?: string | undefined
}

export function getFormattedDistanceBetweenDates(
  date: ParameterDate,
  baseDate: ParameterDate,
  options?: FormaterOptions
) {
  return intlFormatDistance(new Date(date), new Date(baseDate || Date.now()), options)
}
