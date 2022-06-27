import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function StudentsScreen({ navigation }) {
    const [name, setName] = React.useState('');

    return (
        <View>
            <Text style={styles.headingText}>Home Screen</Text>
            <TextInput
                style={styles.userText}
                placeholder='Please add text'
                value={name}
                onChangeText={(text)=> setName(text)} />
            <Button title='Go to detail' style={styles.button} onPress={() => navigation.navigate("Details", { name })} />
        </View>
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
                component={StudentsScreen}
                />
            <Tab.Screen
                name='PM'
                component={StudentScreen}
                />
            <Tab.Screen
                name='All'
                component={StudentScreen}
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

export { StudentsScreen, DetailScreen };