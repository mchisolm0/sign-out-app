import 'react-native-gesture-handler';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import { StudentScreen } from './StudentScreen';
import CustomDrawerContent from '../CustomDrawerContent';
import db from '../db/firestore';

const Drawer = createDrawerNavigator();

export default function StudentDrawer({ route, navigation }) {
    const dimensions = useWindowDimensions();

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

export { StudentDrawer };
