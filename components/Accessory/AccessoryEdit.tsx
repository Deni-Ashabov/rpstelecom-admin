import './index.css'

import { Edit } from 'react-admin'

import { ACCESSORIES_SOURCE_NAME } from '../../constants/sourceNames'
import { useGoodsEdition } from '../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../elements/EditTopToolbar/EditTopToolbar'
import { AccessoryForm } from './components/AccessoryForm'

export const AccessoryEdit = () => {
  const {
    type,
    onSelectType,
    maxImagesCount,
    allowedExtensions,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(ACCESSORIES_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <AccessoryForm
        type={type}
        onSelectType={onSelectType}
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Edit>
  )
}
