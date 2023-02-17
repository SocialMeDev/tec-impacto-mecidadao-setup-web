import { FC, memo, ReactElement, useState } from 'react'
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import SearchUser from './views/SearchUser'
import SelectUser from './views/SelectUser'
import SelectMultipleUsers from './views/SelectMultipleUsers'
import { IUserFilters, IUserQuestions, IUserInformations, ISubtitles } from './types'

type SelectedView = {
  [index: string]: JSX.Element
}

interface Props {
  searchRoute: (filters: IUserFilters) => Promise<any>
  title?: string
  subtitles?: ISubtitles
  overlayType?: string
  ActionView: any
  defaultFilters?: any
  trigger: ReactElement
  multiple?: boolean
  informations: IUserInformations
  questions: IUserQuestions
}

const UserFinder: FC<Props> = ({
  ActionView,
  searchRoute,
  defaultFilters,
  informations,
  multiple = false,
  questions,
  subtitles,
  title = 'Pesquisa de usuário',
  trigger,
  overlayType = 'drawer',
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [view, setView] = useState('search')
  const [users, setUsers] = useState<any[]>([])
  const [selectedUsers, setSelectedUsers] = useState<any[]>([])
  const [selectDefaultValue, setSelectDefaultValue] = useState<any>()
  const [selectedUser, setSelectedUser] = useState<any>()

  function onSubmitSelect(user: any) {
    setSelectDefaultValue(user)
    if (multiple) {
      const array = []
      for (let i = 0; i < user.length; i++) {
        const userInformation = users.find(function (item) {
          if (item.id == user[i]) return item
        })
        array.push(userInformation)
      }
      setSelectedUsers(array)
    } else {
      const userInformation = users.find(function (item) {
        if (item.id == user) {
          return item
        }
      })
      setSelectedUser(userInformation)
    }
    setView('action')
  }

  function closeDrawer() {
    onClose()
    setView('search')
    setUsers([])
    setSelectedUsers([])
    setSelectedUser([])
    setSelectDefaultValue(undefined)
  }

  function RenderContent() {
    const selectViewProps = {
      closeDrawer,
      setView,
      setUsers,
      onSubmitSelect,
      selectDefaultValue,
      informations,
      overlayType,
      title,
      subtitles,
      users,
    }

    const views: SelectedView = {
      action: (
        <ActionView
          closeDrawer={closeDrawer}
          overlayType={overlayType}
          selectedUser={selectedUser}
          selectedUsers={selectedUsers}
          setView={setView}
          subtitles={subtitles}
          title={title}
        />
      ),
      search: (
        <SearchUser
          closeDrawer={closeDrawer}
          defaultFilters={defaultFilters}
          overlayType={overlayType}
          questions={questions}
          searchRoute={searchRoute}
          setUsers={setUsers}
          setView={setView}
          subtitles={subtitles}
          title={title}
        />
      ),
      select: multiple ? <SelectMultipleUsers {...selectViewProps} /> : <SelectUser {...selectViewProps} />,
    }

    return views[view]
  }

  return (
    <>
      <Box onClick={onOpen}>{trigger}</Box>

      {overlayType === 'drawer' && (
        <Drawer blockScrollOnMount={false} isOpen={isOpen} onClose={closeDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <RenderContent />
          </DrawerContent>
        </Drawer>
      )}

      {overlayType === 'modal' && (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={closeDrawer}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <RenderContent />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default memo(UserFinder)
