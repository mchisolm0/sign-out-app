import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StudentsScreen, DetailScreen } from './Modules/Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StudentListStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Students"
          component={StudentsScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
        />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Today'
          component={TodayScreen}
          />
        <Drawer.Screen
          name='History'
          component={HistoryScreen}
          />
        <Drawer.Screen
          name='Settings'
          component={SettingsScreen}
          />
      </Drawer.Navigator>
      <StudentListStack />
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
