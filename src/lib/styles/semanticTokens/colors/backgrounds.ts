const getBackgroundColors = () => {
  return {
    bgContent: {
      default: 'whiteAlpha.900',
      _dark: 'gray.800',
    },
    bgContentHover: {
      default: 'blackAlpha.50',
      _dark: 'gray.900',
    },
    bgContentPrimary: {
      default: 'primary.500',
      _dark: 'primary.600',
    },
    bgContainer: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
  }
}

export default getBackgroundColors()
