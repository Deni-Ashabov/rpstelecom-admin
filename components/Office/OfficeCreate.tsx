import './index.css'

import { Create } from 'react-admin'

import { officeTypes } from '../../constants/goods'
import { useGoodsCreation } from '../../hooks/useGoodsCreation'
import { OfficeForm } from './components/OfficeForm'

export const OfficeCreate = () => {
  const { type, onSelectType, maxImagesCount, allowedExtensions } =
    useGoodsCreation(officeTypes)

  return (
    <Create>
      <OfficeForm
        type={type}
        onSelectType={onSelectType}
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Create>
  )
}
