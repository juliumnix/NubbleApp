import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthScreenProps } from 'src/routes/navigationType';

import { Button } from '../../../components/Button/Button';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  function submitForm({ email }: ForgotPasswordSchema) {
    console.log(email);
    navigation.navigate('SuccessScreen', {
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções oara redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={{ mb: 's40' }}
        label="Email"
        placeholder="Digite seu e-mail"
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
