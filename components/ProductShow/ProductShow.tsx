import './index.css'

import {
  DeleteButton,
  ImageField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <div className='show-actions'>
        <DeleteButton />
      </div>
      <ImageField source='images' src='url' title='desc' />
      <TextField source='name' />
      <TextField source='category' />
      <RichTextField source='description' />
    </SimpleShowLayout>
  </Show>
)
