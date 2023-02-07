import { extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react'

import defaultFonts from './fonts'
import defaultSemanticTokens from './semanticTokens'
import defaultGlobal from './global'

type Fonts = {
  heading: string
  body: string
}

type CkakraThemeOptions = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  colorScheme?: string
}

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

type Params = {
  global?: object
  semanticTokens?: SemanticTokens
  colors?: Colors
  fonts?: Fonts
  options?: CkakraThemeOptions
}

type NewTheme = {
  global?: object
  colors?: Colors
  fonts?: Fonts
  options?: CkakraThemeOptions
  semanticTokens: {
    colors: SemanticTokens
  }
}

function createCustomChakraTheme(configs: Params) {
  const newTheme: NewTheme = {
    semanticTokens: {
      colors: {},
    },
  }

  let fonts: Fonts = defaultFonts

  if (configs.fonts) fonts = configs.fonts

  newTheme.fonts = fonts

  if (configs.colors) newTheme.colors = configs.colors

  let global: object = defaultGlobal

  if (configs.global) global = Object.assign(configs.global, defaultGlobal)

  newTheme.global = global

  let semanticTokens: SemanticTokens = defaultSemanticTokens

  if (configs.semanticTokens) semanticTokens = Object.assign(defaultSemanticTokens, configs.semanticTokens)

  newTheme.semanticTokens.colors = semanticTokens

  const customTheme = extendTheme(
    newTheme,
    withDefaultColorScheme({ colorScheme: configs.options?.colorScheme || 'primary' }),
    withDefaultSize({ size: configs.options?.size || 'sm' })
  )

  return customTheme
}

export default createCustomChakraTheme
