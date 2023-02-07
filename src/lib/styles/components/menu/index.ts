import { theme } from '@chakra-ui/react'

const menu = {
  parts: ['item', 'command', 'list', 'button', 'groupTitle', 'divider'],
  baseStyle: {
    item: {
      fontSize: '0.85rem',
    },
    command: {},
    list: {
      px: 2,
      py: 2,
    },
    button: {
      _hover: {
        boxShadow: `0 0 0 3px ${theme.colors.blue[400]}`,
      },
      _focus: {
        boxShadow: `0 0 0 3px ${theme.colors.blue[400]}`,
      },
    },
    groupTitle: {},
    divider: {},
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}

export default menu
