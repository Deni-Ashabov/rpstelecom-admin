const getImageExtensionValidationResult = (image: {
  rawFile: File
  url?: string
}) => {
  const allowedExtension = /^image\/(png|jpe?g|webp)$/

  if (image?.url) {
    return
  }

  if (!allowedExtension.test(image.rawFile.type)) {
    return `Недопустимый формат ${
      image.rawFile.type.split('/')[1]
    }! Допускается только jpeg, jpg, png и webp`
  }
}

export const allowedImageExtensions =
  () => (images?: { rawFile: File; url?: string }[]) => {
    if (!images) {
      return
    }

    for (const image of images) {
      return getImageExtensionValidationResult(image)
    }
  }

export const allowedImageExtension =
  () => (image?: { rawFile: File; url?: string }) => {
    if (!image) {
      return
    }

    return getImageExtensionValidationResult(image)
  }
