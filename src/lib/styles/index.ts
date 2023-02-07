import { extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react'

import fonts from './fonts'
import global from './global'
import semanticTokens from './semanticTokens'

const customTheme = extendTheme(
  {
    fonts,
    semanticTokens,
    styles: {
      global,
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
  withDefaultSize({ size: 'sm' }),
  withDefaultSize({
    size: 'lg',
    components: ['Heading'],
  })
)

export default customTheme
