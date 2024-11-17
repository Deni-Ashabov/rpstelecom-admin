import { required, SelectInput } from 'react-admin'

import {
  goodsCollars,
  goodsCollections,
  goodsColors,
  goodsCompositions,
  goodsDecors,
  goodsPrint,
  goodsSeasons,
  goodsSilhouette,
} from '../../../constants/goods'

const TShirtsCharacteristics = () => (
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
        choices={goodsCollars}
        source='characteristics.collar'
        validate={[required()]}
        defaultValue={goodsCollars[0].name}
        optionValue='name'
      />
      <SelectInput
        className='create-block__select'
        choices={goodsSilhouette}
        source='characteristics.silhouette'
        validate={[required()]}
        defaultValue={goodsSilhouette[0].name}
        optionValue='name'
      />
      <SelectInput
        className='create-block__select'
        choices={goodsPrint}
        source='characteristics.print'
        validate={[required()]}
        defaultValue={goodsPrint[0].name}
        optionValue='name'
      />
    </div>
    <div className='create-block'>
      <SelectInput
        className='create-block__select'
        choices={goodsDecors}
        source='characteristics.decor'
        validate={[required()]}
        defaultValue={goodsDecors[0].name}
        optionValue='name'
      />
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
        choices={goodsSeasons}
        source='characteristics.season'
        validate={[required()]}
        defaultValue={goodsSeasons[0].name}
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

export default TShirtsCharacteristics
