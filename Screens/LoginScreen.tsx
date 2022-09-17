import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

function LoginScreen() {
    return (
      <View style={styles.container}>
        <Text>
          This is the login screen.
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  }
 });

export default LoginScreen;
