import { FC, memo } from 'react'
import { IconButton, IconButtonProps, IconProps } from '@chakra-ui/react'

type Props = IconButtonProps & {
  Icon: FC<IconProps>
  iconSize: number
  isDisabled: boolean
}

const ArrowButton: FC<Props> = ({ Icon, iconSize, isDisabled, ...rest }) => {
  return (
    <IconButton
      isDisabled={isDisabled}
      variant="ghost"
      icon={<Icon boxSize={iconSize} />}
      rounded="full"
      _hover={!isDisabled ? { bg: 'primary', color: 'light' } : {}}
      {...rest}
    />
  )
}

export default memo(ArrowButton)
