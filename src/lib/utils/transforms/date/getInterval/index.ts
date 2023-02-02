import { intervalToDuration } from 'date-fns'

type AvailableFormats = {
  [key: string]: string
}

type DateFormatOptions = {
  ignoreYears: boolean
  ignoreMonths: boolean
  ignoreDays: boolean
  ignoreHours: boolean
  ignoreMinutes: boolean
  ignoreSeconds: boolean
}

type GetIntervalParams = {
  start: Date | string
  end: Date | string
  format?: 'medicalRecords'
  options?: DateFormatOptions
}

export function getInterval({ start, end, format, options }: GetIntervalParams): string {
  const interval = intervalToDuration({
    start: new Date(start),
    end: new Date(end || Date.now()),
  })

  const availableFormats: AvailableFormats = {
    medicalRecords: `${interval.years}A ${interval.months}M ${interval.days}D`,
  }

  const defaultFormat = `há ${interval.years && !options?.ignoreYears ? `${interval.years} anos` : ''} ${
    interval.months && !options?.ignoreMonths ? `${interval.months} meses` : ''
  } ${interval.days && !options?.ignoreDays ? `${interval.days} dias` : ''} ${
    interval.hours && !options?.ignoreHours ? `${interval.hours} horas` : ''
  } ${interval.minutes && !options?.ignoreMinutes ? `${interval.minutes} minutos` : ''} ${
    interval.seconds && !options?.ignoreSeconds ? `${interval.seconds} segundos` : ''
  }`

  let output

  if (format) {
    if (availableFormats[format]) {
      output = availableFormats[format]
    } else {
      output = format
        .replace('YY', String(interval.years))
        .replace('MM', String(interval.months))
        .replace('DD', String(interval.days))
        .replace('hh', String(interval.hours))
        .replace('mm', String(interval.minutes))
        .replace('ss', String(interval.seconds))
    }
  } else {
    output = defaultFormat.replace('  ', '')
  }

  return output
}
