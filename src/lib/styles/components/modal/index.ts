const modal = {
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
  variants: {
    responsive: {
      dialog: {
        minWidth: { base: '95%', sm: '95%', md: '500px', lg: '650px' },
      },
      body: {
        height: { base: '95%', sm: '95%', md: '500px', lg: '650px' },
      },
    },
  },
  defaultProps: {},
}

export default modal
