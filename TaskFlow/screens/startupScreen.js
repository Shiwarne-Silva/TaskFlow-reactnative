import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const StartupScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    console.log('Get Started button pressed');
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
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#B9EDDD',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#577D86',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartupScreen;
