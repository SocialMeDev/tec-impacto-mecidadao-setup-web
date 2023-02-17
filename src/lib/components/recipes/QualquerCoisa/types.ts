import { Dispatch, SetStateAction } from 'react'

export type ISubtitles = {
  search: string
  select: string
  action: string
}

export type IUserQuestions = {
  name?: boolean
  cpf_number?: boolean
  cnpj_number?: boolean
  cns_number?: boolean
  rg_number?: boolean
  birth_date?: boolean
  father_name?: boolean
  mother_name?: boolean
}

export type IUsers = {
  id?: string
  avatar_public_url?: string
  name?: string
  cpf_number?: string
  cnpj_number?: string
}

export type IUserFilters = {
  name?: string
  cpf_number?: string
  cnpj_number?: string
  cns_number?: string
  rg_number?: string
  birth_date?: string
  mother_name?: string
  father_name?: string
}

export type IActionViewProps = {
  closeDrawer: () => void
  title?: string
  subtitles?: ISubtitles
  overlayType?: string
  selectedUser: IUsers
  selectedUsers: IUsers[]
  setView: Dispatch<SetStateAction<string>>
}

export type IUserInformations = {
  avatar?: boolean
  cpf_number?: boolean
  cnpj_number?: boolean
  name?: boolean
}

export type IViewCommunProps = {
  closeDrawer: () => void
  title?: string
  subtitles?: ISubtitles
  overlayType?: string
}
