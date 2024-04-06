import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(30); // Initial timer value for resending OTP in seconds
  const [isResendTimerRunning, setIsResendTimerRunning] = useState(false);

  // Effect for resending OTP timer
  useEffect(() => {
    if (isResendTimerRunning && resendTimer > 0) {
      const countdown = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      if (resendTimer === 0) {
        clearInterval(countdown);
        setIsResendTimerRunning(false);
      }

      return () => clearInterval(countdown);
    }
  }, [resendTimer, isResendTimerRunning]);

  const handleGetOTP = () => {
    // Simulate sending a new OTP
    // In a real application, you would send a request to your server to send the OTP

    // Show a pop-up message indicating that the OTP has been sent
    Alert.alert('OTP Sent', 'An OTP has been sent to your email.');
  };

  const handleResendOTP = () => {
    // Simulate sending a new OTP
    // In a real application, you would send a request to your server to resend the OTP
    // Reset the timer to 30 seconds
    setResendTimer(30);
    setIsResendTimerRunning(true);

    // Show a pop-up message indicating that the OTP has been sent
    Alert.alert('OTP Resent', 'An OTP has been resent to your email.');
  };

  const handleResetPassword = () => {
    // Simulate verifying the OTP and resetting the password
    // In a real application, you would send a request to your server to verify the OTP and reset the password

    // Show a pop-up message indicating that the password has been reset
    Alert.alert('Verified OTP', 'OTP has been verified successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot Password </Text>
      <View style={styles.cardContainer}>
        
        <View style={styles.card}>
          <Text style={styles.cardText}>
            For added security, please enter the one-time password (OTP).
          </Text>
        </View>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Email or Mobile No"
        placeholderTextColor="black"
        onChangeText={(text) => setEmail(text)}
        value={email}
        color="white"
      />
      <View style={styles.sendOTPContainer}>
        <TouchableOpacity
          style={styles.getOTPButton}
          onPress={handleGetOTP}
        >
          <Text style={styles.buttonText}>Get OTP </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        placeholderTextColor="black"
        onChangeText={(text) => setOtp(text)}
        value={otp}
        color="black"
      />
      <View style={styles.resendContainer}>
        <TouchableOpacity
          onPress={handleResendOTP}
          disabled={isResendTimerRunning}
        >
          <Text style={styles.resendText}>
            Resend OTP {isResendTimerRunning ? `(${resendTimer}s)` : ''}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={handleResetPassword}
      >
        <Text style={styles.verifyText}>Verify </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        paddingBottom: 40, // Adjust this value according to your requirements
      },
    }),
  },
  heading: {
    fontSize: 20,
    marginBottom: 50,
    color: 'black',
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'blue', // Transparent background
    padding: 15,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 15,
    color: 'white',
  },
  sendOTPContainer: {
    width: '30%',
    marginBottom: 15,
    alignItems: 'flex-end',
    marginLeft: 180,
  },
  getOTPButton: {
    height: 30,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 15,
    marginLeft: 1000,
  },
  buttonText: {
    color: 'white',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 25,
  },
  resendText: {
    fontSize: 15,
    color: 'red',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
  verifyButton: {
    width: '60%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding:10

  },
  verifyText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ForgotPasswordScreen;
