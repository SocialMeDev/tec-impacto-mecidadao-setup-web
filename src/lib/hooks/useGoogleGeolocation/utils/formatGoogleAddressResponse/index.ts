import { GoogleAddressResponse } from '../../types'

const formatGoogleAddressResponse = async (googleResponse: any): Promise<GoogleAddressResponse> => {
  if (!googleResponse) return {}

  const newAddress: GoogleAddressResponse = {}

  const coordinates = googleResponse.geometry?.location

  if (coordinates) {
    const { lat, lng } = coordinates

    newAddress.address_lat = lat
    newAddress.address_lng = lng
  }

  googleResponse.address_components.forEach((item: any) => {
    const isCountry = item.types.includes('country')
    const isStreat = item.types.includes('street_address')
    const isRoute = item.types.includes('route')
    const isNeighborhood = item.types.includes('neighborhood')
    const isSublocality = item.types.includes('sublocality')
    const isStreatNumber = item.types.includes('street_number')
    const isCEP = item.types.includes('postal_code')
    const isUF = item.types.includes('administrative_area_level_1')
    const isCity = item.types.includes('administrative_area_level_2')

    if (isCountry) newAddress.address_country = item.long_name
    if (isStreat || isRoute) newAddress.address = item.long_name
    if (isUF) newAddress.address_uf = item.long_name
    if (isCity) newAddress.address_city = item.long_name
    if (isStreatNumber) newAddress.address_number = item.long_name
    if (isCEP) newAddress.address_zip_code = item.long_name

    if (isNeighborhood || isSublocality) {
      newAddress.address_neighbourhood = item.long_name
    }
  })

  return newAddress
}

export default formatGoogleAddressResponse
