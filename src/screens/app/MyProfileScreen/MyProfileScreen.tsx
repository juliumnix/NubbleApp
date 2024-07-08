import React from 'react';

import { Screen, Text } from '@components/index';
import { AppTabScreenProps } from 'src/routes';

export function MyProfileScreen(_: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">MyProfileScreen</Text>
    </Screen>
  );
}
