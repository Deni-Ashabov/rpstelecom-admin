// eslint-disable-next-line no-unused-vars
import './index.css'

import React from 'react'
import {
  DeleteButton,
  ImageField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <div className='show-actions'>
        <DeleteButton />
      </div>
      <ImageField source='image.url' title='desc' />
      <TextField source='name' />
      <TextField source='email' />
      <RichTextField source='role' />
    </SimpleShowLayout>
  </Show>
)
