import { Create, PasswordInput, required } from 'react-admin'

import { UserForm } from '../UserForm/UserForm'

export const UserCreate = () => (
  <Create>
    <UserForm
      passwordComponent={
        <PasswordInput source='password' validate={[required()]} resettable />
      }
    />
  </Create>
)
