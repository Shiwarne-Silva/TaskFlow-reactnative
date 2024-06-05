import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Image,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you'd perform your actual login logic 
    // (e.g., sending data to a server for validation)
    console.log('Login attempted with:', email, password);
    // After successful login, navigate to the next screen:
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/task.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Welcome Back!</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.signupText, styles.signupLink]}>Sign Up</Text>
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
    width: '100%',
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

export default LoginScreen;
