import { Button, Screen, Text } from '@components/index';
import React from 'react';
import { AppScreenProps } from 'src/routes/navigationType';

export function HomeScreen({}: AppScreenProps<'AppTabNavigator'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" />
    </Screen>
  );
}
