export type Image = {
  avatarId: number
  url: string
}

export type MainImage = {
  file?: File
  fileUrl?: string
}

export type UploadImageProviderProps = {
  onUpdate: (newImage: Image) => Promise<boolean>
  onDelete: (avatarId: number) => Promise<boolean>
  onUpload: (file: File) => Promise<boolean>
  isLoading?: boolean
  defaultImage?: string
  size?: string
  rounded?: string
}
