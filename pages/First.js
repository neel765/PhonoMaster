import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const First = ({ navigation }) => {
  useEffect(() => {
    checkFirstTimeLogin();
  }, []);

  const checkFirstTimeLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstTimeLogin');
      if (value !== null) {
        // User has logged in before, navigate to 'dash' directly
        navigation.navigate('Home');  // Update this line
      }
    } catch (e) {
      console.error('Error reading from AsyncStorage:', e);
    }
  };

  const setNotFirstTimeLogin = async () => {
    try {
      await AsyncStorage.setItem('@firstTimeLogin', 'true');
    } catch (e) {
      console.error('Error storing to AsyncStorage:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/011.png')} style={styles.logo} />
      <Text style={styles.imageText}>Hello</Text>
      <Text style={styles.Text}>Welcome to Phonomaster </Text>
      <Button onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </Button>

      <Button
        style={styles.signupButton}
        onPress={() => {
          navigation.navigate('signup');
          setNotFirstTimeLogin(); // Set that the user has logged in, not the first time anymore
        }}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </Button>
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
  imageText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  Text: {
    color: 'black',
    padding: 0,
    fontSize: 20,
    opacity: 0.5,
    fontFamily: 'calibri',
  },
  logo: {
    marginTop: 20,
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 40,
    width: '60%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  },
  signupButton: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 40,
    width: '60%',
    alignItems: 'center',
  },

  signupText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default First;
