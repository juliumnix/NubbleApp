import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../../../components/Button/Button';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';

import { AuthScreenProps } from 'src/routes/navigationType';
import { SignUpSchema, signUpSchema } from './signUpSchema';

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      fullname: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    navigation.navigate('SuccessScreen', {
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullname"
        label="Nome Completo"
        placeholder="Digite seu nome"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
