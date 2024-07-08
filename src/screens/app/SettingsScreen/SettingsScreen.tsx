import React from 'react';

import { Button, Screen, Text } from '@components/index';
import { AppScreenProps } from 'src/routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Settings Screen</Text>
      <Button title="Home" />
    </Screen>
  );
}
