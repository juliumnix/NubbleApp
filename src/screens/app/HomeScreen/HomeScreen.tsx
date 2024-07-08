import React from 'react';

import { Button, Screen, Text } from '@components/index';
import { AppTabScreenProps } from 'src/routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" />
    </Screen>
  );
}
