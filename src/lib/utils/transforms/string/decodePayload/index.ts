export function decodePayload(payload: string) {
  const formatedPayload = payload.replace(/-/g, '+').replace(/_/g, '/')

  const decodedString = Buffer.from(formatedPayload, 'base64').toString('utf-8')

  return JSON.parse(decodedString)
}
