import { Theme } from '@chakra-ui/react'

import getAccessibilityGlobalCSS from './class/accessibility'
import getScrollbar from './class/scrollbar'

type Params = {
  theme: Theme
  colorMode: 'light' | 'dark'
}

const global = ({ theme, colorMode }: Params) => {
  const isLightMode = colorMode === 'light'

  const scrollbarCSS = getScrollbar(isLightMode)
  const acessibilityCSS = getAccessibilityGlobalCSS(theme, isLightMode)

  return {
    '*': {
      boxSizing: 'border-box',
    },
    ...acessibilityCSS,
    ...scrollbarCSS,
  }
}

export default global
