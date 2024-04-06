import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Word = () => {
  const [letters, setLetters] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  const hindiLetters = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज', 'झ', 'ट', 'ठ'];

  useEffect(() => {
    const shuffledLetters = shuffle([...hindiLetters, ...hindiLetters]);
    setLetters(shuffledLetters);
  }, []);

  const shuffle = (array) => {
    let currentIndex = array.length, temp, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  };

  const handleCardPress = (index) => {
    if (selectedIndices.length === 1 && selectedIndices[0] === index) return;

    setSelectedIndices((prevIndices) => {
      const newIndices = [...prevIndices, index];

      if (newIndices.length === 2) {
        checkForMatch(newIndices);
      }

      return newIndices;
    });
  };

  const checkForMatch = (indices) => {
    const [firstIndex, secondIndex] = indices;
    if (letters[firstIndex] === letters[secondIndex]) {
      setMatchedIndices((prevMatches) => [...prevMatches, ...indices]);
      setSelectedIndices([]);
      if (matchedIndices.length + 2 === letters.length) {
        Alert.alert('Congratulations!', 'You matched all pairs!');
      }
    } else {
      setTimeout(() => {
        setSelectedIndices([]);
      }, 1000);
    }
  };

  const renderLetters = () => {
    return letters.map((letter, index) => {
      const isRevealed = selectedIndices.includes(index) || matchedIndices.includes(index);

      return (
        <TouchableOpacity
          key={index}
          style={[styles.card, isRevealed && styles.revealed]}
          onPress={() => handleCardPress(index)}
          activeOpacity={0.7}
          disabled={matchedIndices.includes(index)}
        >
          <Text style={styles.cardText}>{isRevealed ? letter : '?'}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ImageBackground
      source={require('../images/background2.png')} // Replace with your background image path
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.gameBoard}>{renderLetters()}</View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameBoard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  revealed: {
    backgroundColor: 'black',
  },
});

export default Word;
