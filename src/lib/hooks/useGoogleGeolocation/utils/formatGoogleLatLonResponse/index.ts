import { GoogleAddressResponse } from '../../types'

const formatGoogleLatLonResponse = async (googleResponse: any): Promise<GoogleAddressResponse> => {
  if (!googleResponse) return {}

  const [address_number, address, address_neighbourhood, address_city, address_uf, address_country, address_zip_code] =
    googleResponse.address_components

  return {
    address_lat: googleResponse.geometry.location.lat,
    address_lng: googleResponse.geometry.location.lng,
    address_number: address_number.long_name,
    address: address.long_name,
    address_neighbourhood: address_neighbourhood.long_name,
    address_city: address_city.long_name,
    address_uf: address_uf.long_name,
    address_country: address_country.long_name,
    address_zip_code: address_zip_code.long_name,
  }
}

export default formatGoogleLatLonResponse
