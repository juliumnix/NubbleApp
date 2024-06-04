import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route }: ScreenProps) {
  function goBackToBegin() {}
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button mt="s40" onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  );
}
