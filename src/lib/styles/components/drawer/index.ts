const drawer = {
  parts: ['dialog', 'header', 'body', 'footer'],
  baseStyle: {
    dialog: {},
    body: {
      padding: 4,
    },
    header: {
      fontWeight: 500,
      borderBottomWidth: '1px',
      borderColor: 'borderColor',
    },

    footer: {
      borderTopWidth: '1px',
      borderColor: 'borderColor',
      gap: 4,
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {
    size: 'md',
  },
}

export default drawer
