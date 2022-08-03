import React, { useReducer, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { NewStudentInput } from './NewStudentInput';
import { actionCreators, reducer, initialState } from './student';

export default function CustomDrawerContent({ navigation, props }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <Button
                title="Hide List"
                onPress={() => {
                    navigation.closeDrawer();
                } } 
            />
            <NewStudentInput
                placeholder={'Type student name here, then press enter.'}
                onSubmitEditing={(studName) => dispatch(actionCreators.add(studName))} 
            />
        </>
    )
}



const styles = StyleSheet.create({
    input: {
        padding: 14,
        height: 50
        }
})
