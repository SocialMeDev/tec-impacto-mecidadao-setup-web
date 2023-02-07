const getScrollbar = (isLightMode: boolean) => {
  return {
    '.scrollbar': {
      '&::-webkit-scrollbar': {
        width: '8px',
        height: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        bg: isLightMode ? 'gray.300' : 'gray.700',
      },
      '&::-webkit-scrollbar-track': {
        bg: isLightMode ? 'gray.100' : 'gray.500',
      },
    },
  }
}

export default getScrollbar
