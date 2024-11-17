import '../index.css'

import {
  CheckboxGroupInput,
  ImageField,
  ImageInput,
  NumberInput,
  required,
  SelectInput,
  TabbedForm,
  TextInput,
} from 'react-admin'

import {
  goodsIsBestseller,
  goodsIsNew,
  goodsPopularity,
  souvenirsTypes,
} from '../../../constants/goods'
import { IBaseFormProps } from '../../../types/goods'
import SouvenirsCharacteristics from './SouvenirsCharacteristics'

export const SouvenirsForm = ({
  maxImagesCount,
  allowedExtensions,
}: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='info'>
      <div className='create-block'>
        <SelectInput
          className='create-block__select'
          choices={souvenirsTypes}
          source='type'
          validate={[required()]}
          optionValue='name'
        />
        <NumberInput
          min={0}
          className='create-block__select'
          source='price'
          validate={[required()]}
        />
        <TextInput
          className='create-block__select'
          source='name'
          validate={[required()]}
          resettable
        />
        <NumberInput
          min={0}
          className='create-block__select'
          source='inStock'
          validate={[required()]}
        />
        <TextInput
          source='description'
          validate={[required()]}
          multiline
          resettable
        />
      </div>
      <div className='create-block create-middle'>
        <SelectInput
          className='create-block__select'
          choices={goodsPopularity}
          source='popularity'
          validate={[required()]}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='isNew'
          choices={goodsIsNew}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='isBestseller'
          choices={goodsIsBestseller}
          optionValue='name'
        />
      </div>
      <ImageInput
        validate={[required(), maxImagesCount(), allowedExtensions()]}
        source='images'
        label='Product images'
        maxSize={3000000}
        multiple
      >
        <>
          <ImageField source='url' title='desc' />
          <ImageField source='src' title='title' />
        </>
      </ImageInput>
    </TabbedForm.Tab>
    <TabbedForm.Tab label='characteristics'>
      <SouvenirsCharacteristics />
    </TabbedForm.Tab>
  </TabbedForm>
)
