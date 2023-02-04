import { Dispatch, FC, memo, SetStateAction, useState } from 'react'

import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Checkbox,
  CheckboxGroup,
  Avatar,
} from '@chakra-ui/react'

import { Empty } from 'lib/components'
import { cpfMask, cnpjMask } from 'lib/utils/masks'
import { capitalizeString } from 'lib/utils/transforms/string'
import { IViewCommunProps, IUserInformations, IUsers } from '../../types'

type Props = IViewCommunProps & {
  onSubmitSelect: (values: any) => void
  setView: Dispatch<SetStateAction<string>>
  informations: IUserInformations
  users: IUsers[]
  selectDefaultValue: string[]
}

const PersonSearchSelectMultiplesUsers: FC<Props> = ({
  closeDrawer,
  informations,
  onSubmitSelect,
  overlayType,
  selectDefaultValue,
  setView,
  subtitles,
  title,
  users,
}) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>(selectDefaultValue || [])

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
          <Empty title="Ninguém encontrado" description="Sua busca não retornou nenhum usuário" />
        ) : (
          <Box h={overlayType === 'drawer' ? 'auto' : '50vh'}>
            <CheckboxGroup
              colorScheme="green"
              defaultValue={selectDefaultValue}
              value={selectedUsers}
              onChange={(values) => setSelectedUsers(values as string[])}
            >
              <Stack spacing={[1, 5]} direction={['column']} pb={4}>
                {users.map((user) => (
                  <Flex
                    bg="bgContent"
                    key={user.id}
                    border="1px solid"
                    rounded="md"
                    borderColor="lightPrimary"
                    p={4}
                    gap={4}
                    align="center"
                    cursor="pointer"
                    //onClick={() => onSelect(user.id.toString())}
                    _hover={{
                      bg: 'lightPrimary',
                    }}
                  >
                    <Checkbox value={user.id?.toString()} />
                    {informations?.avatar && <Avatar name={user.name} src={user.avatar_public_url} />}

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
            </CheckboxGroup>
          </Box>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button onClick={() => setView('search')}>Fazer outra busca</Button>
        <Button variant="solid" onClick={() => onSubmitSelect(selectedUsers)} disabled={selectedUsers.length > 0}>
          Próximo
        </Button>
      </DrawerFooter>
    </>
  )
}

export default memo(PersonSearchSelectMultiplesUsers)
