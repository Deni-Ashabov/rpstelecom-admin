// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const UsersList = () => {
  const handleRowClick = () => {
    return 'show';
  };

  return (
    <List>
      <Datagrid rowClick={handleRowClick}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
      </Datagrid>
    </List>
  );
};
