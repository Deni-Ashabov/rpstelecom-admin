import React, { useState } from 'react'

export const useGoodsCreation = (types: { id: number; name: string }[]) => {
  const [type, setType] = useState('')

  const onSelectType = (e: unknown) => {
    const event = e as React.ChangeEvent<HTMLInputElement>
    const optionValue = event.target.value
    const currentOption = types.find((type) => type.name === optionValue)

    if (currentOption) {
      setType(currentOption.name)
    }
  }

  const maxImagesCount = () => (images: { rawFile: File }[]) => {
    if (images.length > 4) {
      return 'Max 4 images'
    }
  }

  const allowedExtensions = () => {
    const allowedExtension = /^image\/(png|jpe?g|webp)$/

    return (images: { rawFile: File; url?: string }[]) => {
      for (const image of images) {
        if (image?.url) {
          return
        }

        if (!allowedExtension.test(image.rawFile.type)) {
          return `Недопустимый формат ${
            image.rawFile.type.split('/')[1]
          }! Допускается только jpeg, jpg, png и webp`
        }
      }
    }
  }

  return {
    type,
    maxImagesCount,
    onSelectType,
    allowedExtensions,
    setType,
  }
}
