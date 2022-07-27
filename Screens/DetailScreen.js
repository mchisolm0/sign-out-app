import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button, TextInput, useWindowDimensions } from 'react-native';

import { style } from './Screens/StyleSheet';

export default function DetailScreen({ route, navigation }) {
    const { name } = route.params;

    return (
        <View>
            <Text style={style.styles.headingText}>Student: { name } </Text>
            <Button title='Go Home' style={styles.button} onPress={() => navigation.navigate('Home')} />
        </View>
    )
};

export { DetailScreen };