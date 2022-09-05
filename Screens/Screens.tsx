import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const StudentListDrawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StudentScreen({ studentName }) {
  const [name, setName] = React.useState(studentName);

    return (
      <View>
        <Text>{`The student's name is ${name}`}</Text>
      </View>
    )
}

function StudentsScreen({ navigation }) {
    const dimensions = useWindowDimensions();

    return (
        <StudentListDrawer.Navigator
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
            }}>
          <StudentListDrawer.Screen
            name='Student1'
            initialParams={{ studentName: 'Julia'}}
            component ={StudentScreen}
          />
          <StudentListDrawer.Screen
            name='Student2'
            initialParams={{ studentName: 'Samuel'}}
            component ={StudentScreen}
          />
        {/*
          <Text style={styles.headingText}> Home Screen </Text>
            <TextInput
                style={styles.userText}
                placeholder='Please add text'
                value={name}
                onChangeText={(text)=> setName(text)} />
          <Button
            title='Go to detail'
            style={styles.button}
            onPress={() => navigation.navigate(
                "DetailScreen",
                { params:
                  { student: name }
                }
            )}
          />
         */}
        </StudentListDrawer.Navigator>
    )
}

function DetailScreen({ route, navigation }) {
    const { name } = route.params;

    return (
        <View>
            <Text style={styles.headingText}>Student: { name } </Text>
            <Button 
                title='Go Home' 
                // style={styles.button} TODO fix this style
                onPress={() => navigation.navigate('Home')} 
            />
        </View>
    )
}

function TodayScreen( route, navigation ) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='AM'
                component={StudentsScreen}
                />
            <Tab.Screen
                name='PM'
                component={StudentsScreen}
                />
            <Tab.Screen
                name='All'
                component={StudentsScreen}
                />
        </Tab.Navigator>
    )
}

function HistoryScreen( route, navigation ) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='AM'
                component={StudentsScreen}
                />
            <Tab.Screen
                name='PM'
                component={StudentsScreen}
                />
            <Tab.Screen
                name='All'
                component={StudentsScreen}
                />
        </Tab.Navigator>
    )
}

function SettingsScreen( route, navigation  ) {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='AM'
                component={StudentsScreen}
                />
            <Tab.Screen
                name='PM'
                component={StudentsScreen}
                />
            <Tab.Screen
                name='All'
                component={StudentsScreen}
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

export { StudentsScreen, DetailScreen, HistoryScreen, TodayScreen, SettingsScreen};
