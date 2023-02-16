import { AddressBody } from '@lib/types'
import { cepMask } from '@lib/utils/masks'
import { capitalizeString } from '@lib/utils/transforms/string'

function checkAddressFieldExist(string: string | undefined, suffix: string) {
  return string ? '' : suffix + string
}

function checkCepFieldExist(string?: string) {
  return string ? '' : ' ' + cepMask(string)
}

export function getFormattedAddress(place: AddressBody): string {
  const { address, address_neighbourhood, address_number, address_city, address_uf, address_zip_code } = place

  const streat = address
  const number = checkAddressFieldExist(address_number, ', ')
  const neighbourhood = checkAddressFieldExist(address_neighbourhood, ' - ')
  const city = checkAddressFieldExist(address_city, ' - ')
  const state = checkAddressFieldExist(address_uf, ', ')
  const cep = checkCepFieldExist(address_zip_code)

  const formattedAddress = `${streat}${number}${neighbourhood}${city}${state}${cep}`

  return capitalizeString(formattedAddress)
}
