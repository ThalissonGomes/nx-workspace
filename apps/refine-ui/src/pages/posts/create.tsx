import { HttpError } from '@pankod/refine-core';
import { Box, Create, TextField } from '@pankod/refine-mui';
import { useForm } from '@pankod/refine-react-hook-form';

import { IUser } from 'interfaces';

export const PostCreate: React.FC = () => {
  const {
    refineCore: { formLoading },
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm<IUser, HttpError>();
  // } = useForm<IUser, HttpError, IUser & { category: ICategory }>();
  // const { autocompleteProps } = useAutocomplete<ICategory>({
  //   resource: 'categories',
  // });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="off"
      >
        <TextField
          {...register('name', {
            required: 'Campo Obrigatório',
          })}
          error={!!errors.name}
          helperText={errors.name ? 'Nome deve conter apenas letras' : ''}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nome"
          name="name"
          autoFocus
        />
        <TextField
          {...register('email', {
            required: 'Campo Obrigatório',
          })}
          error={!!errors.email}
          helperText={
            errors.email
              ? 'Email deve atender ao formato: exmplo@exemplo.com'
              : ''
          }
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
        />
        <TextField
          {...register('username', {
            required: 'Campo Obrigatório',
          })}
          error={!!errors.username}
          helperText={
            errors.username ? 'Usuário deve conter apenas letras e números' : ''
          }
          margin="normal"
          fullWidth
          required
          id="username"
          label="Usuário"
          name="username"
        />

        <TextField
          {...register('password', {
            required: 'Campo Obrigatório',
          })}
          error={!!errors.password}
          helperText={
            errors.password
              ? 'Senha deve conter pelo menos 6 caractéres, dentre eles 1 letra Maiúscula e 1 Minúscula, 1 Número e 1 Caractere Especial'
              : ''
          }
          margin="normal"
          fullWidth
          id="password"
          required
          label="Senha"
          name="password"
          type={'password'}
        />
      </Box>
    </Create>
  );
};
