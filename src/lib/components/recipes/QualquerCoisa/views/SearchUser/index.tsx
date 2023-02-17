import { Dispatch, FC, memo, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Button, Text, Heading, DrawerBody, DrawerFooter, DrawerHeader } from '@chakra-ui/react'

import {
  NameQuestion,
  CPFQuestion,
  CNPJQuestion,
  CNSQuestion,
  RGQuestion,
  BirthDateQuestion,
  MotherNameQuestion,
  FatherNameQuestion,
} from './components/Questions'
import { removeEverythingThatIsNotNumber } from 'lib/utils/transforms/string'
import { IViewCommunProps, IUserQuestions, IUserFilters } from '../../types'

interface Props extends IViewCommunProps {
  defaultFilters: any
  questions: IUserQuestions
  searchRoute: (filters: IUserFilters) => Promise<any>
  setUsers: Dispatch<SetStateAction<any>>
  setView: Dispatch<SetStateAction<string>>
}

const SearchUser: FC<Props> = ({
  defaultFilters,
  overlayType,
  questions,
  subtitles,
  title,
  searchRoute,
  setUsers,
  setView,
  closeDrawer,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmitSearch(values: IUserFilters) {
    const filters = {
      ...defaultFilters,
      name: values.name,
      cpf_number: removeEverythingThatIsNotNumber(values.cpf_number),
      cnpj_number: removeEverythingThatIsNotNumber(values.cnpj_number),
      cns_number: removeEverythingThatIsNotNumber(values.cns_number),
      rg_number: removeEverythingThatIsNotNumber(values.rg_number),
      birth_date: removeEverythingThatIsNotNumber(values.birth_date),
      mother_name: removeEverythingThatIsNotNumber(values.mother_name),
      father_name: removeEverythingThatIsNotNumber(values.father_name),
    }
    const response = await searchRoute(filters)
    if (response?.header?.success) {
      setUsers(response.body.person.elements)
      setView('select')
    }
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmitSearch)}
      flexDir="column"
      justify="space-between"
      h={overlayType === 'drawer' ? '100vh' : 'auto'}
    >
      <DrawerHeader>
        {subtitles?.search && <Text fontSize="sm">{subtitles?.search}</Text>}
        <Heading size="md" color="primary">
          {title}
        </Heading>
      </DrawerHeader>
      <DrawerBody>
        <Flex flexDir="column" gap={2}>
          {questions?.name && <NameQuestion register={register} errors={errors} />}
          {questions?.cpf_number && <CPFQuestion register={register} errors={errors} />}
          {questions?.cnpj_number && <CNPJQuestion register={register} errors={errors} />}
          {questions?.cns_number && <CNSQuestion register={register} errors={errors} />}
          {questions?.rg_number && <RGQuestion register={register} errors={errors} />}
          {questions?.birth_date && <BirthDateQuestion register={register} errors={errors} />}
          {questions?.mother_name && <MotherNameQuestion register={register} errors={errors} />}
          {questions?.father_name && <FatherNameQuestion register={register} errors={errors} />}
        </Flex>
      </DrawerBody>
      <DrawerFooter className="drawer-footer">
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button variant="solid" type="submit" isLoading={isSubmitting}>
          Pesquisar
        </Button>
      </DrawerFooter>
    </Flex>
  )
}

export default memo(SearchUser)
