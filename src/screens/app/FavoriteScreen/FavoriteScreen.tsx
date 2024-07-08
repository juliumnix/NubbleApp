import React from 'react';

import { Screen, Text } from '@components/index';
import { AppTabScreenProps } from 'src/routes';

export function FavoriteScreen(_: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  );
}
