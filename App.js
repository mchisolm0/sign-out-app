import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StudentsScreen, DetailScreen, TodayScreen, HistoryScreen, SettingsScreen } from './Modules/Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const PageDrawer = createDrawerNavigator();

{/* Taking out the list stack for now while making bare-ui
const Stack = createNativeStackNavigator();
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
  } */}

export default function App() {
  return (
    <NavigationContainer>
      <PageDrawer.Navigator>
        {/* Make PageDrawer only open on pressing icon*/}
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
      {/* <StudentListStack /> */}
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
