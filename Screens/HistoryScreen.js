import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';

import { stylesUsed } from './StyleSheet';

export default function HistoryScreen( route, navigation ) {
    return (
        <View style={stylesUsed.container}>
            <Text>This will be the History Screen.</Text>
        </View>
    )
};

export { HistoryScreen };