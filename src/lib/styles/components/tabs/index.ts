import { Theme } from '@chakra-ui/react'

type Params = {
  theme: Theme
  colorMode: 'light' | 'dark'
}

const tabs = {
  parts: ['tablist', 'tab', 'tabpanel', 'indicator'],
  baseStyle: {
    tablist: {},
    tab: {},
    tabpanel: {},
    indicator: {},
  },
  sizes: {},
  variants: {
    line: ({ colorMode, theme }: Params) => {
      return {
        tablist: {
          overflowY: { base: 'hidden', md: 'visible' },
          overflowX: { base: 'auto', md: 'visible' },
          '::-webkit-scrollbar': {
            height: '5px',
          },
          '::-webkit-scrollbar-track': {
            background: 'gray.300',
          },

          '::-webkit-scrollbar-thumb': {
            background: 'primary',
          },
        },
        tab: {
          rounded: 'sm',
          minWidth: 'max-content',
          py: 2,
          px: 4,

          _focus: {
            color: theme.colors.blue[colorMode === 'light' ? 500 : 400],
          },
        },
      }
    },
  },
  defaultProps: {},
}

export default tabs
