import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StudentDrawer } from './StudentDrawer';

const Tab = createBottomTabNavigator();

function SettingsScreen( route, navigation  ) {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='AM'
                component={StudentDrawer}
                />
            <Tab.Screen
                name='PM'
                component={StudentDrawer}
                />
            <Tab.Screen
                name='All'
                component={StudentDrawer}
                />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        padding: 20,
        backgroundColor: 'blue',
    },
    headingText: {
        fontSize: 36,
    },
    userText: {
        textAlign: 'center',
        fontSize: 28,
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 16,
    },
    textInputContainer: {
        alignItems:'center'
    }
  });

export { SettingsScreen };
