import { HttpError } from '@pankod/refine-core';
import { Box, Edit, TextField } from '@pankod/refine-mui';
import { useForm } from '@pankod/refine-react-hook-form';

import { IUser } from 'interfaces';

export const PostEdit: React.FC = () => {
  const {
    refineCore: { formLoading, queryResult },
    saveButtonProps,
    register,
    control,
    formState: { errors },
  } = useForm<IUser, HttpError>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="on"
      >
        <TextField
          {...register('name', {
            required: 'Campo Obrigatório',
          })}
          error={!!errors.name}
          helperText={
            errors.name ? 'Nome deve conter apenas letras e espaços' : ''
          }
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          autoFocus
        />
        <TextField
          {...register('email', {
            disabled: true,
          })}
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
        />
        <TextField
          {...register('username', {
            disabled: true,
          })}
          margin="normal"
          fullWidth
          required
          id="username"
          name="username"
        />
      </Box>
    </Edit>
  );
};
