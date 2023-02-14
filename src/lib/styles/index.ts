import { extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react'

import fonts from './fonts'
import semanticTokens from './semanticTokens'
import global from './global'

type Colors = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type SemanticTokens = {
  [key: string]: {
    default: string
    _dark: string
  }
}

type Fonts = {
  heading: string
  body: string
}

type Params = {
  colors?: Colors
}

type NewTheme = {
  colors?: Colors
  global: object
  fonts: Fonts
  semanticTokens: {
    colors: SemanticTokens
  }
}

function createCustomChakraTheme({ colors }: Params) {
  const newTheme: NewTheme = {
    global,
    fonts,
    semanticTokens: {
      colors: semanticTokens,
    },
  }

  if (colors) newTheme.colors = colors

  const customTheme = extendTheme(
    newTheme,
    withDefaultColorScheme({ colorScheme: 'primary' }),
    withDefaultSize({ size: 'sm' })
  )

  return customTheme
}

export default createCustomChakraTheme
