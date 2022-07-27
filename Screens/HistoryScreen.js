import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';

export default function HistoryScreen( route, navigation ) {
    return (
        <View style={styles.container}>
            <Text>This will be the History Screen.</Text>
        </View>
    )
};

export { HistoryScreen };