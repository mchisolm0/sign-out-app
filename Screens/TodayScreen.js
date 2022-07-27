import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StudentDrawer } from './StudentDrawer';

const Tab = createBottomTabNavigator();

export default function TodayScreen( route, navigation ) {
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
};

export { TodayScreen };