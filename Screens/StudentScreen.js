import React, { useState } from 'react';
import { View, Text } from 'react-native';



export default function StudentScreen({ student }) {
    const [name, setName] = useState(student);
  
    return (
    <View>
        <Text>{`The student's name is ${name}`}</Text>
    </View>
    )
}

export { StudentScreen };