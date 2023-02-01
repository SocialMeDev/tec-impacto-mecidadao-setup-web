type FormaterAvatarOptions = {
  size?: 'sm' | 'md' | 'lg'
}

export function getFormattedAvatarUrl(allData: any, prefix = '', options: FormaterAvatarOptions = { size: 'sm' }) {
  const emptyString = ''

  const newPrefix = prefix === '' ? prefix : `${prefix}_`

  const pathnameExtension = emptyString.concat(newPrefix, 'avatar_extension')
  const pathnameId = emptyString.concat(newPrefix, 'avatar_id')
  const pathnamePublicUrl = emptyString.concat(newPrefix, 'avatar_public_url')
  const pathnameResolution = emptyString.concat(newPrefix, 'avatar_resolution')
  const pathnameVariations = emptyString.concat(newPrefix, 'avatar_variations')

  const data = {
    extension: allData[pathnameExtension],
    id: allData[pathnameId],
    publicUrl: allData[pathnamePublicUrl],
    resolution: allData[pathnameResolution],
    variations: allData[pathnameVariations],
  }

  if (!data.publicUrl) return ''

  return data.publicUrl.replace(`.${data.extension}`, `_${options.size}.${data.extension}`)
}
