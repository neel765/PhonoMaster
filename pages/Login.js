import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, LogBox } from 'react-native';
import { Button } from 'react-native-paper';

LogBox.ignoreAllLogs();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const signintestfn = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log(err);
        setErrorText(err.message);
      });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    welcomeImage: {
      marginTop: 20,
      width: 300,
      height: 300,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 0,
      color: 'black',
      marginLeft: 130,
    },
    inputContainer: {
      margin: 20,
      marginTop: 10,
      marginBottom: 10,
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
    placeholderText: {
      color: 'gray',
    },
    button: {
      backgroundColor: 'blue',
      padding: 12,
      borderRadius: 40,
      width: '60%',
      color: 'white',
      marginLeft: '35%',
      marginBottom: '0%',
      marginTop: '2%',
    },
    link: {
      fontSize: 15,
      marginLeft: 25,
      marginTop: 0,
      marginBottom: 2,
      borderRadius: 20,
      color: 'black',
    },
    errorText: {
      color: 'red',
      fontSize: 20,
      alignSelf: 'center',
    },
    text: {
      color: 'black',
      fontSize: 22,
      height: 30,
      paddingLeft: 10,
      fontFamily: 'calibri',
      fontWeight: 'bold',
    },
    text1: {
      color: 'black',
      fontSize: 22,
      height: 40,
      paddingLeft: 10,
      fontFamily: 'calibri',
      fontWeight: 'bold',
    },
    login: {
      color: 'white',
      fontSize: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Image source={require('../images/013.png')} style={styles.welcomeImage} />
      <Text style={styles.title}> Login </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholderTextColor={styles.placeholderText.color}
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text1}>Password </Text>
        <TextInput
          placeholderTextColor={styles.placeholderText.color}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.input}
        />
      </View>
    
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      <Button 
        style={styles.button}
        onPress={signintestfn}
      >
        <Text style={styles.login}>LogIn</Text>
      </Button>
    </View>
  );
};

export default Login;
