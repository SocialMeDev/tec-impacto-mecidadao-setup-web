import { extendTheme, withDefaultSize } from '@chakra-ui/react'

const customTheme = extendTheme({}, withDefaultSize({ size: 'sm' }))

export default customTheme
