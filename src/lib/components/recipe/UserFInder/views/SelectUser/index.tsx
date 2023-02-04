import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  RadioGroup,
  Radio,
} from '@chakra-ui/react'

import { Empty } from '@lib/components'
import { getFormattedAvatarUrl } from '@lib/utils/transforms/string'
import { cpfMask, cnpjMask } from '@lib/utils/masks'
import { capitalizeString } from '@lib/utils/transforms/string'
import { IViewCommunProps, IUserInformations, IUsers } from '../../types'

type Props = IViewCommunProps & {
  onSubmitSelect: (values: any) => void
  setView: Dispatch<SetStateAction<string>>
  informations: IUserInformations
  users: IUsers[]
  selectDefaultValue?: string
}

const PersonSearchSelectUser: FC<Props> = ({
  closeDrawer,
  onSubmitSelect,
  setView,
  informations,
  overlayType,
  selectDefaultValue,
  subtitles,
  title,
  users,
}) => {
  const [selectedUser, setSelectedUser] = useState<string | undefined>(selectDefaultValue)

  return (
    <>
      <DrawerHeader>
        {subtitles?.select && <Text fontSize="sm">{subtitles?.select}</Text>}
        <Heading color="primary" size="md">
          {title}
        </Heading>
      </DrawerHeader>
      <DrawerBody bg="bgContainer">
        {users.length === 0 ? (
          <Empty title="Ninguém encontrado" description="Sua busca não retornou nenhum usuário">
            <Button onClick={() => setView('search')}>Fazer outra busca</Button>
          </Empty>
        ) : (
          <Box h={overlayType === 'drawer' ? 'auto' : '50vh'}>
            <RadioGroup
              colorScheme="green"
              defaultValue={selectDefaultValue}
              value={selectedUser}
              onChange={(values) => setSelectedUser(values)}
            >
              <Stack spacing={[1, 5]} direction={['column']} pb={4}>
                {users.map((user) => (
                  <Flex
                    bg="bgContent"
                    key={user.id}
                    border="1px solid"
                    rounded="md"
                    borderColor="primary.100"
                    align="center"
                    cursor="pointer"
                    p={4}
                    gap={4}
                    onClick={() => setSelectedUser(user.id?.toString())}
                    _hover={{
                      bg: 'primaryLight',
                    }}
                  >
                    <Radio value={user.id?.toString()} />
                    {informations?.avatar && <Avatar name={user.name} src={getFormattedAvatarUrl(user)} />}

                    <Box>
                      {informations?.name && <Text variant="primary">{capitalizeString(user.name)}</Text>}
                      {informations?.cpf_number && user?.cpf_number && (
                        <Text variant="secondary">{cpfMask(user?.cpf_number)}</Text>
                      )}
                      {informations?.cnpj_number && user?.cnpj_number && (
                        <Text variant="secondary">{cnpjMask(user?.cnpj_number)}</Text>
                      )}
                    </Box>
                  </Flex>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button variant="outline" onClick={() => setView('search')}>
          Fazer outra busca
        </Button>
        <Button onClick={() => onSubmitSelect(selectedUser)} disabled={!selectedUser}>
          Próximo
        </Button>
      </DrawerFooter>
    </>
  )
}

export default memo(PersonSearchSelectUser)
