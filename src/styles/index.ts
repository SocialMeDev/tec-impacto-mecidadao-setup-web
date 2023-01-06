import { extendTheme, withDefaultSize } from '@chakra-ui/react'

const customTheme = extendTheme(
  {
    fonts: {
      heading: 'Poppins',
      body: 'Poppins'
    }
  },
  withDefaultSize({ size: 'sm' })
)

export default customTheme
