import { extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react'

import semanticTokens from './semanticTokens'

const customTheme = extendTheme(
  {
    semanticTokens,
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
  withDefaultSize({ size: 'sm' }),
  withDefaultSize({
    size: 'lg',
    components: ['Heading'],
  })
)

export default customTheme
