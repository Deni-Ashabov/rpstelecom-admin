import './index.css'

import { Create } from 'react-admin'

import { souvenirsTypes } from '../../constants/goods'
import { useGoodsCreation } from '../../hooks/useGoodsCreation'
import { SouvenirsForm } from './components/SouvenirsForm'

export const SouvenirsCreate = () => {
  const { maxImagesCount, allowedExtensions } = useGoodsCreation(souvenirsTypes)

  return (
    <Create>
      <SouvenirsForm
        maxImagesCount={maxImagesCount}
        allowedExtensions={allowedExtensions}
      />
    </Create>
  )
}
