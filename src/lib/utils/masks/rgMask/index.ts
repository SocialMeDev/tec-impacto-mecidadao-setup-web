export function rgMask(value = ''): string {
  if (!value) return ''

  return value.replace(/\D/g, '').replace(/(\d{6})(\d{1})+?$/, '$1-$2')
}
