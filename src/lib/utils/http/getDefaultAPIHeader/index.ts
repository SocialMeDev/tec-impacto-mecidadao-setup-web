import { getStorage } from '@lib/utils/storage'

type Headers = {
  [key: string]: string | boolean | undefined
}

async function getDefaultAPIHeader() {
  const userTokenStorageName = process.env.NEXT_PUBLIC_USER_TOKEN_STORAGE_NAME
  const applicationKeyStorageName = process.env.NEXT_PUBLIC_APPLICATION_KEY_STORAGE_NAME
  const appKeyValue = process.env.NEXT_PUBLIC_APP_KEY

  const userToken = getStorage(userTokenStorageName)

  const headers: Headers = {
    [String(applicationKeyStorageName)]: appKeyValue,
  }

  if (userToken) {
    headers[String(userTokenStorageName)] = userToken
  }

  return headers
}

export default getDefaultAPIHeader
