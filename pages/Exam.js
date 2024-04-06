import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import TestScore from './TestScore';
import { storeresult } from './storeresult'; // Import the storeResult function

const questions = [
  {
    question: {
      en: 'What is the color of the sky?',
      hi: 'आसमान का रंग क्या है?',
    },
    options: {
      en: ['Blue', 'Green', 'Red', 'Yellow'],
      hi: ['नीला', 'हरा', 'लाल', 'पीला'],
    },
    correctAnswer: 0, 
    image: require('../images/sky1.jpg'),
  },
  {
    question: {
      en: 'How many fingers do you have on one hand?',
      hi: 'एक हाथ में आपके कितने उंगल होते हैं?',
    },
    options: {
      en: ['Three', 'Five', 'Eight', 'Ten'],
      hi: ['तीन', 'पाँच', 'आठ', 'दस'],
    },
    correctAnswer: 1,
    image: require('../images/hand.jpeg'),
  },
  {
    question: {
      en: 'What comes after Monday?',
      hi: 'सोमवार के बाद क्या आता है?',
    },
    options: {
      en: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hi: ['मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार'],
    },
    correctAnswer: 0,
    image: require('../images/day1.jpg'),
  },
  {
    question: {
      en: 'Which animal says "meow"?',
      hi: 'कौन सा जानवर "म्याऊं" कहता है?',
    },
    options: {
      en: ['Dog', 'Cat', 'Elephant', 'Lion'],
      hi: ['कुत्ता', 'बिल्ली', 'हाथी', 'सिंह'],
    },
    correctAnswer: 1,
    image: require('../images/cat.png'),
  },
  {
    question: {
      en: 'How many legs does a spider have?',
      hi: 'मकड़ी के पास कितनी टांगें होती हैं?',
    },
    options: {
      en: ['Four', 'Six', 'Eight', 'Ten'],
      hi: ['चार', 'छह', 'आठ', 'दस'],
    },
    correctAnswer: 2,
    image: require('../images/spi.jpeg'),
  },
];

const Exam = ({ examResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(Math.max(currentQuestion - 1, 0));
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setExamStarted(false);
    setTestResult(null);
  };

  const startExam = () => {
    setExamStarted(true);
  };

  const finalScore = () => {
    storeresult({ score, totalQuestions: questions.length }); // Store the result
  };

  const isTestCompleted = currentQuestion === questions.length;

  if (isTestCompleted && !testResult) {
    setTestResult(
      score === questions.length
        ? 'Excellent! You answered all questions correctly.'
        : score >= questions.length / 2
        ? 'Good job! You answered most of the questions correctly.'
        : 'Keep practicing! You can improve your score.'
    );
    finalScore(); // Call finalScore function when the test is completed
  }

  return (
    <ImageBackground source={require('../images/background2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          {!examStarted && (
            <TouchableOpacity style={styles.startButton} onPress={startExam}>
              <Text style={styles.startButtonText}>परीक्षा शुरू करें</Text>
            </TouchableOpacity>
          )}
          {examStarted && !isTestCompleted && (
            <View>
              <Image source={questions[currentQuestion].image} style={styles.image} />
              <Text style={styles.questionText}>{questions[currentQuestion].question.hi}</Text>
              <View style={styles.optionsContainer}>
                {questions[currentQuestion].options.hi.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleAnswer(index)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.navigationButton} onPress={handlePrevious}>
                  <Text style={styles.buttonText}>पिछला</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.navigationButton}
                  onPress={() => handleAnswer(-1)}
                >
                  <Text style={styles.buttonText}>आगे</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {isTestCompleted && (
            <View>
              <Text style={styles.resultText}>
                परीक्षा समाप्त! {'\n'} आपका स्कोर: {score} / {questions.length}
              </Text>
              <Text style={styles.resultDescription}>{testResult}</Text>
              <Button style={[styles.navigationButton, styles.restartButton]} onPress={restartTest}>
                <Text style={styles.buttonText}>पुनः प्रारंभ करें</Text>
              </Button>
              
            </View>
          )}
        </View>
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
  card: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 3,
    margin: 15,
  },
  startButton: {
    backgroundColor: '#27ae60',
    padding: 20,
    borderRadius: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 15,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  optionsContainer: {
    marginTop: 15,
  },
  optionButton: {
    backgroundColor: '#FAD0D1',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    height: 55,
  },
  optionText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  resultDescription: {
    fontSize: 24,
    textAlign: 'center',
    color: 'green',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  navigationButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '45%',
  },
  restartButton: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Exam;
