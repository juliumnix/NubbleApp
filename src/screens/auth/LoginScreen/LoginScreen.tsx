import React from 'react';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthScreenProps } from 'src/routes/navigationType';

import { LoginSchema, loginSchema } from './loginSchema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({ email, password }: LoginSchema) {
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        boxProps={{ mb: 's20' }}
        label="Email"
        placeholder="Digite seu e-mail"
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's10' }}
      />

      <Text
        bold
        preset="paragraphSmall"
        color="primary"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        marginTop="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />

      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
