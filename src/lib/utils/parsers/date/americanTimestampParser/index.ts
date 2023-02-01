import { format } from 'date-fns'
import { americanDateParser } from '../americanDateParser'

export function americanTimestampParser(stringTimestampFormat = '') {
  const date = stringTimestampFormat.split(' ')[0]
  const hour = stringTimestampFormat.split(' ')[1]

  const newDate = `${americanDateParser(date)} ${hour || ''}`
  const dt = new Date(newDate)
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)

  return format(dtDateOnly, 'yyyy-MM-dd HH:mm')
}
