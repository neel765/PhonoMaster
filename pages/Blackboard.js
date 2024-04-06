import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound'; // Import the Sound module

const HindiTypingPractice = () => {
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hindiWords, setHindiWords] = useState([]);
  const [showNextWord, setShowNextWord] = useState(false);
  const [sounds, setSounds] = useState({});

  useEffect(() => {
    // Your list of Hindi words and their corresponding sound files
    const wordList = [
      { word: 'पाठशाला', sound: require('../audio/p1.mp3') },
      { word: 'समझाना', sound: require('../audio/p2.mp3') },
      { word: 'पहला', sound: require('../audio/p3.mp3') },
      // Add more words and their sound files as needed
    ];

    // Create an object to hold the sounds
    const soundObj = {};
    wordList.forEach(item => {
      soundObj[item.word] = new Sound(item.sound, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log(`Failed to load audio "${item.word}":`, error);
        }
      });
    });

    // Set the state with the generated list of words and sounds
    setHindiWords(wordList.map(item => item.word));
    setSounds(soundObj);

    generateNewWord(); // Initial word generation

    // Cleanup function to release sound resources
    return () => {
      Object.values(soundObj).forEach(sound => sound.release());
    };
  }, []);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * hindiWords.length);
    setCurrentWordIndex(randomIndex);
    setText('');
    setIsCorrect(false);
    setShowNextWord(false);
    playWordAudio(hindiWords[randomIndex]);
  };

  const handleTextChange = newText => {
    if (newText === hindiWords[currentWordIndex]) {
      setText(newText);
      setIsCorrect(true);
      setShowNextWord(true);
      playWordAudio(newText);
    } else if (hindiWords[currentWordIndex].startsWith(newText)) {
      setText(newText);
      setIsCorrect(false);
    }
  };
  

  const handleNextWord = () => {
    generateNewWord();
  };

  const playWordAudio = word => {
    if (sounds[word]) {
      const sound = sounds[word];
      sound.play(success => {
        if (!success) {
          console.log('Failed to play audio');
        }
      });
    } else {
      console.log(`Audio file for "${word}" not found`);
    }
  };

  const renderSampleWord = () => {
    if (currentWordIndex !== -1) {
      const currentWord = hindiWords[currentWordIndex];
      return (
        <View style={styles.sampleWordContainer}>
          {currentWord.split('').map((letter, index) => (
            <Text key={index} style={styles.sampleWordText}>
              {letter}
            </Text>
          ))}
        </View>
      );
    } else {
      return null;
    }
  };

  const renderHindiKeyboard = () => {
    if (currentWordIndex !== -1) {
      const currentWord = hindiWords[currentWordIndex];
      return (
        <View style={styles.keyboard}>
          {currentWord.split('').map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={styles.key}
              onPress={() => handleTextChange(text + letter)}
              disabled={isCorrect}
            >
              <Text style={styles.keyText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <ImageBackground
      source={require('../images/background2.png')} // Replace with your background image path
      style={styles.container}
    >
      {renderSampleWord()}
      <TouchableOpacity style={styles.audioButton} onPress={() => playWordAudio(hindiWords[currentWordIndex])}>
        <Text style={styles.buttonText}>Play Audio </Text>
      </TouchableOpacity>
      <View style={styles.practiceBoard}>
        <Text style={[styles.text, { color: isCorrect ? 'green' : 'white' }]}>{text}</Text>
      </View>
      {showNextWord ? (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextWord}>
          <Text style={styles.buttonText}>Next Word</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.instructionText}>नीचे दिए गए कीबोर्ड का उपयोग करके प्रदर्शित अक्षर टाइप करें:</Text>
      {renderHindiKeyboard()}
      <TouchableOpacity style={styles.clearButton} onPress={() => handleTextChange('')}>
        <Text style={styles.buttonText}>Clear Text </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sampleWordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  sampleWordText: {
    fontSize: 18,
    color: 'black',
    margin: 5,
  },
  practiceBoard: {
    width: '100%',
    height: 120,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  nextButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  key: {
    width: 50,
    height: 50,
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  keyText: {
    fontSize: 24,
    color: 'black',
  },
  audioButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default HindiTypingPractice;
