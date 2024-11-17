import './index.css'

import { Create } from 'react-admin'

import { clothTypes } from '../../constants/goods'
import { useGoodsCreation } from '../../hooks/useGoodsCreation'
import { ClothForm } from './components/ClothForm'

export const ClothCreate = () => {
  const { type, onSelectType, maxImagesCount, allowedExtensions } =
    useGoodsCreation(clothTypes)

  return (
    <Create>
      <ClothForm
        type={type}
        onSelectType={onSelectType}
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Create>
  )
}
