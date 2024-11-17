import React from 'react'
import {
  email,
  ImageField,
  ImageInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin'

import { USER_ROLES } from '../../../constants/users'
import { allowedImageExtension } from '../../../utils/validation'

export const UserForm = ({
  passwordComponent,
}: {
  passwordComponent: React.ReactNode
}) => (
  <SimpleForm>
    <ImageInput
      validate={[allowedImageExtension()]}
      source='image'
      label='Avatar'
      maxSize={3000000}
    >
      <>
        <ImageField source='url' title='desc' />
        <ImageField source='src' title='title' />
      </>
    </ImageInput>
    <SelectInput
      choices={USER_ROLES}
      source='role'
      validate={[required()]}
      optionValue='name'
      defaultValue={USER_ROLES[1].name}
    />
    <TextInput source='name' validate={[required()]} resettable />
    <TextInput source='email' validate={[required(), email()]} resettable />
    {passwordComponent}
  </SimpleForm>
)
