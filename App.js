import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodayScreen } from './Screens/TodayScreen';
import { HistoryScreen } from './Screens/HistoryScreen';
import { SettingsScreen } from './Screens/SettingsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const PageDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PageDrawer.Navigator>
        <PageDrawer.Screen
          name='Today'
          component={TodayScreen}
        />
        <PageDrawer.Screen
          name='History'
          component={HistoryScreen}
        />
        <PageDrawer.Screen
          name='Settings'
          component={SettingsScreen}
        />
      </PageDrawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 2,
    backgroundColor: 'blue',
  },
});
