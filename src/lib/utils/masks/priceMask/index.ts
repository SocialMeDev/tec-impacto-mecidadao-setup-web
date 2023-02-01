export function priceMask(value = ''): string {
  if (!value) return ''

  return value.replace(/\D/g, '').replace(/(\d+)(\d{2})/, '$1.$2')
}
