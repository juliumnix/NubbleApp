import React from 'react';

import { AuthScreenProps } from 'src/routes/navigationType';

import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';

export function SuccessScreen({ route }: AuthScreenProps<'SuccessScreen'>) {
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
