import { required, SelectInput } from 'react-admin'

import {
  bagStyles,
  bagTextures,
  bagWearingMethods,
  goodsCollections,
  goodsColors,
  goodsCompositions,
} from '../../../constants/goods'

const BagsCharacteristics = () => (
  <>
    <div className='create-block'>
      <SelectInput
        className='create-block__select'
        choices={goodsColors}
        source='characteristics.color'
        validate={[required()]}
        defaultValue={goodsColors[0].name}
        optionValue='name'
      />
      <SelectInput
        className='create-block__select'
        choices={bagWearingMethods}
        source='characteristics.wearingMethod'
        validate={[required()]}
        defaultValue={bagWearingMethods[0].name}
        optionValue='name'
      />
      <SelectInput
        className='create-block__select'
        choices={bagTextures}
        source='characteristics.texture'
        validate={[required()]}
        defaultValue={bagTextures[0].name}
        optionValue='name'
      />
      <SelectInput
        className='create-block__select'
        choices={bagStyles}
        source='characteristics.style'
        validate={[required()]}
        defaultValue={bagStyles[0].name}
        optionValue='name'
      />
    </div>
    <div className='create-block'>
      <SelectInput
        className='create-block__select'
        choices={goodsCompositions}
        source='characteristics.composition'
        validate={[required()]}
        defaultValue={goodsCompositions[0].name}
        optionValue='name'
      />
      <SelectInput
        className='create-block__select'
        choices={goodsCollections}
        source='characteristics.collection'
        validate={[required()]}
        defaultValue={goodsCollections[0].name}
        optionValue='name'
      />
    </div>
  </>
)

export default BagsCharacteristics
