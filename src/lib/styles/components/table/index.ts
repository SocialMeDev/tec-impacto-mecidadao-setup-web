import { Theme } from '@chakra-ui/react'

type Params = {
  theme: Theme
  colorMode: 'light' | 'dark'
}

const table = {
  parts: ['table', 'thead', 'tr', 'th', 'tbody', 'td', 'caption'],
  baseStyle: {
    table: {},
    thead: {},
    tr: {},
    th: {},
    tbody: {},
    td: {},
    caption: {},
  },
  sizes: {},
  variants: {
    small: () => {
      return {
        table: {},
        thead: {},
        tr: {
          borderBottomWidth: '1px',
          borderColor: 'borderColor',
        },
        th: {
          p: 1,
          fontWeight: 500,
          color: 'primary',
        },
        tbody: {},
        td: {
          p: '0.5 !important',
        },
        caption: {},
      }
    },
    unstyled: ({ colorMode, theme }: Params) => {
      return {
        thead: {},
        tr: {
          padding: 4,
          borderBottomWidth: '1px',
          borderColor: 'borderColor',
        },
        th: {
          fontSize: 'sm',
          fontWeight: 500,
          letterSpacing: 0,
          textAlign: 'start',
          borderTopWidth: '1px',
          whiteSpace: 'nowrap',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          lineHeight: '1.25rem',
          color: theme.colors.gray[colorMode === 'light' ? 500 : 400],
          borderColor: 'borderColor',
          background: 'bgContainer',
        },
        tbody: {},
        td: {},
      }
    },
  },
  defaultProps: {
    variant: 'unstyled',
    size: 'sm',
  },
}

export default table
