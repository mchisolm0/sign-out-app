import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button, TextInput, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomListTopper from '../CustomDrawerContent';

import List from '../List';
import { actionCreators, initialState, reducer } from '../student';
import CustomDrawerContent from '../CustomDrawerContent';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StudentDrawer({ route, navigation }) {
    const dimensions = useWindowDimensions();
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Drawer.Navigator
            screenOptions={{drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',}}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name='Student1'
                initialParams={{ studentName: 'Julia'}}
                component ={StudentScreen}
            />
            <Drawer.Screen
                name='Student2'
                initialParams={{ studentName: 'Samuel'}}
                component ={StudentScreen}
            />
        </Drawer.Navigator>
    )
}

function DetailScreen({ route, navigation }) {
    const { name } = route.params;

    return (
        <View>
            <Text style={styles.headingText}>Student: { name } </Text>
            <Button title='Go Home' style={styles.button} onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

function TodayScreen( route, navigation ) {
    return (
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
}

function HistoryScreen( route, navigation ) {
    return (
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
}

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
}
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

export { StudentDrawer, DetailScreen, HistoryScreen, TodayScreen, SettingsScreen};
