import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getDistanceToNow(date: Date) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: ptBR,
  })
}
