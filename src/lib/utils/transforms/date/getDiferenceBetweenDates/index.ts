import {
  differenceInMilliseconds,
  differenceInDays,
  parseISO,
  differenceInSeconds,
  differenceInMinutes,
} from 'date-fns'

type PossibleReturnsTypes = {
  [key: string]: (dateLeft: Date | number, dateRight: Date | number) => void
}

type ReturnType = 'days' | 'milliseconds' | 'seconds' | 'minutes'

export function getDiferenceBetweenDates(startDate: string, endDate: string, returnedBy: ReturnType = 'days') {
  if (!startDate || !endDate) return

  const startDateParse = parseISO(startDate)
  const endDateParse = parseISO(endDate)

  const possibleReturnsTypes: PossibleReturnsTypes = {
    days: differenceInDays,
    minutes: differenceInMinutes,
    seconds: differenceInSeconds,
    milliseconds: differenceInMilliseconds,
  }

  const differenceInChoosedType = possibleReturnsTypes[returnedBy]

  return differenceInChoosedType(endDateParse, startDateParse)
}
