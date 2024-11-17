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
  accessoryTypes,
  goodsIsBestseller,
  goodsIsNew,
  goodsPopularity,
  goodsSizes,
} from '../../../constants/goods'
import { IBaseFormProps } from '../../../types/goods'
import BagsCharacteristics from './BagsCharacteristics'
import HeaddressCharacteristics from './HeaddressCharacteristics'
import UmbrellaCharacteristics from './UmbrellaCharacteristics'

export const AccessoryForm = ({
  type,
  onSelectType,
  maxImagesCount,
  allowedExtensions,
}: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='info'>
      <div className='create-block'>
        <SelectInput
          className='create-block__select'
          choices={accessoryTypes}
          source='type'
          validate={[required()]}
          onChange={onSelectType}
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
        {type !== 'umbrella' && (
          <CheckboxGroupInput
            source='sizes'
            choices={goodsSizes}
            optionValue='name'
          />
        )}
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
          <ImageField source='src' title='title' />
          <ImageField source='url' title='desc' />
        </>
      </ImageInput>
    </TabbedForm.Tab>
    <TabbedForm.Tab label='characteristics'>
      {type === 'bags' && <BagsCharacteristics />}
      {type === 'headdress' && <HeaddressCharacteristics />}
      {type === 'umbrella' && <UmbrellaCharacteristics />}
    </TabbedForm.Tab>
  </TabbedForm>
)
