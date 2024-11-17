import { Admin, defaultTheme, Resource } from 'react-admin'

import { AccessoryCreate } from '../components/Accessory/AccessoryCreate'
import { AccessoryEdit } from '../components/Accessory/AccessoryEdit'
import { ClothCreate } from '../components/Cloth/ClothCreate'
import { ClothEdit } from '../components/Cloth/ClothEdit'
import { GoodsList } from '../components/GoodsList/GoodsList'
import { OfficeCreate } from '../components/Office/OfficeCreate'
import { OfficeEdit } from '../components/Office/OfficeEdit'
import { ProductShow } from '../components/ProductShow/ProductShow'
import { SouvenirsCreate } from '../components/Souvenirs/SouvenirsCreate'
import { SouvenirsEdit } from '../components/Souvenirs/SouvenirsEdit'
import { UserCreate } from '../components/Users/UserCreate/UserCreate'
import { UserEdit } from '../components/Users/UserEdit/UserEdit'
import { UserShow } from '../components/Users/UserShow/UserShow'
import { UsersList } from '../components/Users/UsersList/UsersList'
import {
  ACCESSORIES_SOURCE_NAME,
  CLOTH_SOURCE_NAME,
  OFFICE_SOURCE_NAME,
  SOUVENIRS_SOURCE_NAME,
  USERS_SOURCE_NAME,
} from '../constants/sourceNames'
import { authProvider } from './authProvider'
import dataProvider from './dataProvider'

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={{
      ...defaultTheme,
      palette: {
        mode: 'dark',
        main: '#4caf50',
      },
    }}
  >
    <Resource
      name={USERS_SOURCE_NAME}
      list={UsersList}
      show={UserShow}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name={CLOTH_SOURCE_NAME}
      list={GoodsList}
      show={ProductShow}
      create={ClothCreate}
      edit={ClothEdit}
    />
    <Resource
      name={ACCESSORIES_SOURCE_NAME}
      list={GoodsList}
      show={ProductShow}
      create={AccessoryCreate}
      edit={AccessoryEdit}
    />
    <Resource
      name={OFFICE_SOURCE_NAME}
      list={GoodsList}
      show={ProductShow}
      create={OfficeCreate}
      edit={OfficeEdit}
    />
    <Resource
      name={SOUVENIRS_SOURCE_NAME}
      list={GoodsList}
      show={ProductShow}
      create={SouvenirsCreate}
      edit={SouvenirsEdit}
    />
  </Admin>
)
