import './index.css'

import { Edit } from 'react-admin'

import { OFFICE_SOURCE_NAME } from '../../constants/sourceNames'
import { useGoodsEdition } from '../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../elements/EditTopToolbar/EditTopToolbar'
import { OfficeForm } from './components/OfficeForm'

export const OfficeEdit = () => {
  const {
    type,
    onSelectType,
    maxImagesCount,
    allowedExtensions,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(OFFICE_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <OfficeForm
        type={type}
        onSelectType={onSelectType}
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Edit>
  )
}
