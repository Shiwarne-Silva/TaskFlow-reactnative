import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const StartupScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    console.log('Login or Signup button pressed!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>
      <Image source={require('../assets/images/task.png')} style={styles.image} />
      <Text style={styles.subtitle1}>Organize your work and life, finally.</Text>
      <Text style={styles.subtitle2}>
        Become focused, organized, and calm with TaskFlow. The world’s #1 to-do list app.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CBB9',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 25,
  },
  subtitle1: {
    textAlign: 'center',
    fontSize: 24,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  subtitle2: {
    lineHeight: 24,
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '80%', 
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF5F1F',
    paddingVertical: 15,
    width: '45%',  // Give each button 45% width of the container
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center', // Center text horizontally within the button
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default StartupScreen;
