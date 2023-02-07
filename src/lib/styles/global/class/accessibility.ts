import { Theme } from '@chakra-ui/react'

function getAccessibilityGlobalCSS(theme: Theme, isLightMode: boolean) {
  const boxShadowFocusColor = theme.colors.blue[isLightMode ? 400 : 200]

  return {
    '.accessible': {
      borderRadius: 'md',
      cursor: 'pointer',
      transition: 'all 250ms',
      outline: '2px solid transparent',

      _focus: {
        boxShadow: `0 0 0 3px ${boxShadowFocusColor}`,
      },
    },

    '.tr-accessible': {
      cursor: 'pointer',
      transition: 'all 250ms',
      outline: 'none',
      _hover: {
        bg: 'lighterPrimary',
      },
      _focus: {
        bg: 'lighterPrimary',
      },
    },
  }
}

export default getAccessibilityGlobalCSS
