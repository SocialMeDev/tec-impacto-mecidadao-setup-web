import { ChangeEvent, createContext, Dispatch, SetStateAction } from 'react'
import { Image, MainImage, UploadImageProviderProps } from '../types'

export interface IUploadImageContext extends UploadImageProviderProps {
  isOpen: boolean
  image: MainImage
  images: Image[]
  view: string
  openModal: () => void
  closeModal: () => void
  setImage: Dispatch<SetStateAction<MainImage>>
  setView: Dispatch<SetStateAction<string>>
  handleOnClick: () => void
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const defaultValues: IUploadImageContext = {
  isOpen: false,
  view: '',
  isLoading: false,
  images: [],
  image: { fileUrl: '' },
  size: '',
  rounded: '',
  openModal: () => {},
  closeModal: () => {},
  setImage: () => {},
  setView: () => {},
  onUpdate: async () => true,
  onDelete: async () => true,
  onUpload: async () => true,
  handleOnClick: () => {},
  handleOnChange: () => {},
}

const UploadImageContext = createContext<IUploadImageContext>(defaultValues)

export default UploadImageContext
