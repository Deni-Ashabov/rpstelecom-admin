export interface IBaseFormProps {
  maxImagesCount: () => (images: { rawFile: File }[]) => string | undefined
  allowedExtensions: () => (images: { rawFile: File }[]) => string | undefined
  type?: string
  onSelectType?: (e: unknown) => void
}
