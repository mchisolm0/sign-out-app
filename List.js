import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScreenStack } from "react-native-screens";
import { StudentScreen } from './Screens/Screens';

export default function List(students, onPressStudent) {
    return (
        <FlatList
            data={students}
            keyExtractor={(student) => student.id}
            renderItem={({ student, index }) => (
                <Drawer.Screen
                    name={students.id}
                    initialPrams
                    component={StudentScreen}
                    
                onPress={() => onPressStudent(student.id)}
                >
                    <Text style={styles.title}>{student.studName}</Text>
                </TouchableOpacity>
            )}
        />
    )
}

{/* 
function itemColor(index) {
    return 'rgba(59, 108, 212, ${Math.max(1 - index /10, 0.4)})'
}
*/}

const styles = StyleSheet.create({
    student: {
        marginBottom: 1,
        padding: 15,
    },
    title: {
        color: 'white',
    }
})

export { List }