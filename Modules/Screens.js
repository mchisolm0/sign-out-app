import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function HomeScreen({ navigation }) {
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

export { HomeScreen, DetailScreen };