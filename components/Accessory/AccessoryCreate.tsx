import './index.css'

import { Create } from 'react-admin'

import { accessoryTypes } from '../../constants/goods'
import { useGoodsCreation } from '../../hooks/useGoodsCreation'
import { AccessoryForm } from './components/AccessoryForm'

export const AccessoryCreate = () => {
  const { type, onSelectType, maxImagesCount, allowedExtensions } =
    useGoodsCreation(accessoryTypes)

  return (
    <Create>
      <AccessoryForm
        type={type}
        onSelectType={onSelectType}
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Create>
  )
}
