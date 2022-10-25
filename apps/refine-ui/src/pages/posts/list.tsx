import {
  DataGrid,
  DeleteButton,
  EditButton,
  GridColumns,
  List,
  ShowButton,
  Stack,
  useDataGrid,
} from '@pankod/refine-mui';
import React from 'react';

import { IUser } from 'interfaces';

export const PostList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IUser>();

  const columns = React.useMemo<GridColumns<IUser>>(
    () => [
      {
        field: 'username',
        headerName: 'Username',
        minWidth: 200,
        flex: 1,
      },
      {
        field: 'name',
        headerName: 'Nome',
        minWidth: 250,
        flex: 1,
      },
      {
        field: 'email',
        headerName: 'Email',
        minWidth: 250,
        flex: 1,
      },
      {
        headerName: 'Ações',
        field: 'actions',
        minWidth: 100,
        maxWidth: 150,
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        renderCell: function render(params) {
          return (
            <Stack direction="row" spacing={1}>
              <EditButton hideText recordItemId={params.row.id} />
              <DeleteButton hideText recordItemId={params.row.id} />
            </Stack>
          );
        },
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
