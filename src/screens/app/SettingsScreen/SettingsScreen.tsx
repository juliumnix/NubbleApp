import { Button, Screen, Text } from '@components/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { AppStackParamList } from 'src/routes/AppStack';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen({ navigation }: ScreenProps) {
  return (
    <Screen>
      <Text preset="headingLarge">Settings Screen</Text>
      <Button title="Home" />
    </Screen>
  );
}
