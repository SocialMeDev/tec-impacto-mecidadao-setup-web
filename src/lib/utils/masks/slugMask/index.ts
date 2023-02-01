export function slugMask(value = ''): string {
  if (!value) return ''

  return value
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
