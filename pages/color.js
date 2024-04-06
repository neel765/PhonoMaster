import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

const ColorMatchingGame = () => {
  const [colors, setColors] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  const availableColors = [
    '#FF5733', '#33FF57', '#5733FF', '#FF3357', '#57FF33', '#3357FF',
    '#FFC733', '#FF33C7', '#C733FF', '#33FFC7', '#C7FF33', '#33C7FF'
  ];

  useEffect(() => {
    const shuffledColors = shuffle([...availableColors, ...availableColors]);
    setColors(shuffledColors);
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
    if (colors[firstIndex] === colors[secondIndex]) {
      setMatchedIndices((prevMatches) => [...prevMatches, ...indices]);
      setSelectedIndices([]);
      if (matchedIndices.length + 2 === colors.length) {
        Alert.alert('Congratulations!', 'You matched all pairs!');
      }
    } else {
      setTimeout(() => {
        setSelectedIndices([]);
      }, 1000);
    }
  };

  const renderColorCards = () => {
    return colors.map((color, index) => {
      const isRevealed = selectedIndices.includes(index) || matchedIndices.includes(index);

      return (
        <TouchableOpacity
          key={index}
          style={[styles.card, isRevealed && styles.revealed, { backgroundColor: isRevealed ? color : 'blue' }]}
          onPress={() => handleCardPress(index)}
          activeOpacity={0.7}
          disabled={matchedIndices.includes(index)}
        >
          <Text style={styles.cardText}>{'\u2B1B'}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/background2.png')} // Replace with the actual path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.gameBoard}>{renderColorCards()}</View>
      </ImageBackground>
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
  gameBoard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 60,
    height: 60,
    margin: 13,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom:20,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  revealed: {
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' as per your requirement
  },
});

export default ColorMatchingGame;
