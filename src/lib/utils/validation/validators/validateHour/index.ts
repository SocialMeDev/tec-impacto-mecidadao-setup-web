export function validateHour(time: string): boolean {
  if (time.length !== 5) return false

  const [hour, minutes] = time.split(':').map((value) => Number(value))

  if (hour > 24 && hour < 0) return false
  if (minutes > 60 && hour < 0) return false

  return true
}
