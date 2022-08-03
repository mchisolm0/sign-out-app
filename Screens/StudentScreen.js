import React, { useState } from 'react';
import { View, Text } from 'react-native';



// Added route to access the student name parameter
function StudentScreen({ studentName, route }) {
  const [name, setName] = React.useState(route.params.studentName);
  
    return (
    <View>
        <Text>{`The student's name is ${name}`}</Text>
    </View>
    )
}

export { StudentScreen };