import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Easing } from 'react-native';
import { getResult } from './storeresult'; // Import the getResult function

const ResultComponent = () => {
  const result = getResult(); // Get the stored result

  // Animation setup
  const scaleValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.elastic(1.5),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground source={require('../images/background2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Text style={styles.testscore}>Welcome to the Parental Dashboard </Text>
        {result && (
          <Animated.View style={[styles.resultContainer, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.resultText}>
              Your Score:
            </Text>
            <Text style={styles.scoreText}>
              {result.score} / {result.totalQuestions}
            </Text>
          </Animated.View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Roboto', // You can replace 'Roboto' with your custom font
  },
  scoreText: {
    fontSize: 48,
    textAlign: 'center',
    color: '#FF5733', // Custom color
    fontWeight: 'bold',
    fontFamily: 'Roboto', // You can replace 'Roboto' with your custom font
  },
  testscore:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Dark grey
    // textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
    marginVertical: 20, // Adjust margin as needed
  }
});

export default ResultComponent;
