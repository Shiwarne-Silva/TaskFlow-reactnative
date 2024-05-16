import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartupScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    // Handle the get started button press here
    console.log('Get Started button pressed');
    // For example, you can navigate to another screen if using React Navigation
    // navigation.navigate('NextScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default StartupScreen;
