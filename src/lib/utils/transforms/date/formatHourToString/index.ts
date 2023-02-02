import { format } from 'date-fns'

export function formatHourToString(date: Date) {
  return format(new Date(date), 'HH:mm')
}
