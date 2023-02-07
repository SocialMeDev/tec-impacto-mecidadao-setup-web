const getFeedbackColors = () => {
  return {
    success: {
      default: 'green.500',
      _dark: 'green.400',
    },
    successHover: {
      default: 'green.400',
      _dark: 'green.500',
    },
    danger: {
      default: 'red.500',
      _dark: 'red.400',
    },
    dangerHover: {
      default: 'red.400',
      _dark: 'red.500',
    },
    info: {
      default: 'blue.600',
      _dark: 'blue.400',
    },
    infoHover: {
      default: 'blue.400',
      _dark: 'blue.500',
    },
    warning: {
      default: 'yellow.600',
      _dark: 'yellow.400',
    },
    warningHover: {
      default: 'yellow.400',
      _dark: 'yellow.500',
    },
  }
}

export default getFeedbackColors()
