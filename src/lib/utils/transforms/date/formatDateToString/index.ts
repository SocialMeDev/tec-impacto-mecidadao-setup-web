import { format, addMinutes } from 'date-fns'

export function formatDateToString(parameterDate: Date, dateFormat = 'dd/MM/yyyy') {
  if (!parameterDate) return ''

  const date = new Date()

  const timezone = date.getTimezoneOffset()

  const newDate = addMinutes(new Date(parameterDate), timezone)

  return format(new Date(newDate), dateFormat)
}
