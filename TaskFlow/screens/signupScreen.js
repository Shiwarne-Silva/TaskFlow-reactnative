import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform your signup logic here 
    console.log('Signup attempted with:', name, email, password);
    // Example: Navigate back to the login screen after signup
    navigation.navigate('Login');  
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/task.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.signupText, styles.signupLink]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles (same as in LoginScreen.js)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#87CBB9',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF5F1F',
    paddingVertical: 15,
    paddingHorizontal: 40, 
    borderWidth: 2,
    borderRadius: 25,
    width: '50%',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  signupContainer: { 
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    fontSize: 16,
    color: '#000',
  },
  signupLink: {
    marginLeft: 5,
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
