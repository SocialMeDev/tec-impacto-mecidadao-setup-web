import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import 'lib/config/fonts'
import 'lib/config/styles'

import createCustomTheme from '@lib/styles/createCustomTheme.factory'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createCustomTheme()

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
