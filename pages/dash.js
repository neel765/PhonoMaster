import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ProgressBarAndroid } from 'react-native';
import { getResult } from './storeresult'; // Import the getResult function

const TestScore = () => {
  const result = getResult(); // Get the stored result

  const scorePercentage = result.score / result.totalQuestions; // Calculate percentage

  return (
    <ImageBackground source={require('../images/background2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {result && (
          <>
        
            <Text style={styles.resultText}>
              Your score: {result.score} / {result.totalQuestions}
            </Text>
            <View
              styleAttr="Horizontal"
              indeterminate={false}
              progress={scorePercentage}
              color="#2196F3"
              style={styles.progressBar}
            />
          </>
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
  resultText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  progressBar: {
    width: '80%',
    marginTop: 20,
  },
});

export default TestScore;
