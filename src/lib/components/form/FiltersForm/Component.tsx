import { memo, FC } from 'react'
import { Button, ButtonProps, Flex } from '@chakra-ui/react'

import DrawerView from './components/DrawerView'
import ResetFiltersButton from './components/ResetFiltersButton'
import ModalView from './components/ModalView'
import FooterButtons from './components/FooterButtons'
import FilterFormFields from './components/FormFields'

import { Search1 } from 'lib/components/icons/Interface'
import { useFiltersForm } from './context/FiltersFormContext/Provider'
import { IFiltersFormFields } from './types'

type Props = {
  view?: 'Drawer' | 'Modal'
  buttonProps?: ButtonProps
  fields: IFiltersFormFields[]
}

const FiltersFormComponent: FC<Props> = ({ view = 'Drawer', buttonProps = {}, fields = [] }) => {
  const { onOpen } = useFiltersForm()

  return (
    <>
      <Flex gap={2}>
        <Button onClick={onOpen} variant="outline" leftIcon={<Search1 />} colorScheme="gray" {...buttonProps}>
          Filtrar
        </Button>

        <ResetFiltersButton />
      </Flex>

      {view === 'Drawer' ? (
        <DrawerView Body={<FilterFormFields fields={fields} />} Footer={<FooterButtons />} />
      ) : (
        <ModalView Body={<FilterFormFields fields={fields} />} Footer={<FooterButtons />} />
      )}
    </>
  )
}

export default memo(FiltersFormComponent)
