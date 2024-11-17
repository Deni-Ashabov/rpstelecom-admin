import './index.css'

import { Edit } from 'react-admin'

import { CLOTH_SOURCE_NAME } from '../../constants/sourceNames'
import { useGoodsEdition } from '../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../elements/EditTopToolbar/EditTopToolbar'
import { ClothForm } from './components/ClothForm'

export const ClothEdit = () => {
  const {
    type,
    onSelectType,
    maxImagesCount,
    allowedExtensions,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(CLOTH_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <ClothForm
        type={type}
        onSelectType={onSelectType}
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Edit>
  )
}
