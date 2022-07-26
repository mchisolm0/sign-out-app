



function StudentScreen({ student }) {
    const [name, setName] = React.useState(studentName);
  
    return (
    <View>
        <Text>{`The student's name is ${name}`}</Text>
    </View>
    )
}