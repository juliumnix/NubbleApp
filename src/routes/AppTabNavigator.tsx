import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { FavoriteScreen } from '@screens/app/FavoriteScreen/FavoriteScreen';
import { HomeScreen } from '@screens/app/HomeScreen/HomeScreen';
import { MyProfileScreen } from '@screens/app/MyProfileScreen/MyProfileScreen';
import { NewPostScreen } from '@screens/app/NewPostScreen/NewPostScreen';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  MyProfileScreen: undefined;
  FavoriteScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
