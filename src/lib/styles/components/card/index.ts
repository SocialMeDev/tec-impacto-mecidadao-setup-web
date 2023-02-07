const Card = {
  baseStyle: {
    borderRadius: 'md',
    background: 'bgContent',
    padding: 4,
  },

  variants: {
    bordered: {
      borderWidth: '1px',
      borderColor: 'borderColor',
    },
    paper: {
      boxShadow: 'md',
    },
  },

  defaultProps: {
    variant: 'bordered',
  },
}

export default Card
