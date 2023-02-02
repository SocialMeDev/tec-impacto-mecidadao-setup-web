import { FC, memo } from 'react'
import { Box, Select } from '@chakra-ui/react'

type Props = {
  limit: number
  limitOptions: number[]
  onChangeLimit: (newLimit: number) => void
}

const LimitSelect: FC<Props> = ({ limit, limitOptions, onChangeLimit }) => {
  return (
    <Box>
      <Select
        minW="max-content"
        maxW="max-content"
        onChange={({ target }) => onChangeLimit(Number(target.value))}
        defaultValue={limit}
        gap={1}
      >
        {limitOptions.map((value) => (
          <option key={value} value={value}>
            {`${value} / página`}
          </option>
        ))}
      </Select>
    </Box>
  )
}

export default memo(LimitSelect)
