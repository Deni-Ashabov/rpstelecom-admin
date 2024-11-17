import { useEffect, useState } from 'react'
import {
  useDataProvider,
  useGetOne,
  useGetRecordId,
  useNotify,
  useRedirect,
} from 'react-admin'

import { clothTypes } from '../constants/goods'
import { useGoodsCreation } from './useGoodsCreation'

export const useGoodsEdition = (sourceName: string) => {
  const dataProvider = useDataProvider()
  const notify = useNotify()
  const redirect = useRedirect()
  const id = useGetRecordId()
  const { data: product } = useGetOne(sourceName, { id })
  const { type, onSelectType, maxImagesCount, allowedExtensions, setType } =
    useGoodsCreation(clothTypes)

  const [cloneProductSpinner, setCloneProductSpinner] = useState(false)

  useEffect(() => {
    if (product?.type) {
      setType(product.type)
    }
  }, [product])

  const handleClone = async () => {
    try {
      setCloneProductSpinner(true)

      const { data } = await dataProvider.create(sourceName, {
        data: {
          ...product,
          id: undefined,
          name: `${product.name} (Copy)`,
        },
      })

      notify('Товар успешно скопирован', { type: 'success' })
      redirect('edit', sourceName, data.id)
    } catch (error) {
      notify(`Ошибка при копировании: ${(error as Error).message}`, {
        type: 'error',
      })
    } finally {
      setCloneProductSpinner(false)
    }
  }

  return {
    type,
    maxImagesCount,
    onSelectType,
    allowedExtensions,
    handleClone,
    cloneProductSpinner,
  }
}
