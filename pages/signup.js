import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signuptestfn = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match');
      return;
    }

    auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Navigate to the 'dash' page on successful login
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../images/013.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.header}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.text}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={signuptestfn}
          mode="contained"
          style={styles.button}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 130,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 0,
    marginTop: 0,
  },
  inputContainer: {
    margin: 0,
    marginBottom: 10,
    width: '80%',
  },
  input: {
    fontSize: 18,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    //marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 40,
    width: '60%',
    //marginBottom: 10,
    marginLeft: 180,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    //marginBottom: 10,
  },
});

export default Signup;
