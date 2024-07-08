import React from 'react';

import { Screen, Text } from '@components/index';
import { AppTabScreenProps } from 'src/routes';

export function NewPostScreen(_: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">New Post Screen</Text>
    </Screen>
  );
}
