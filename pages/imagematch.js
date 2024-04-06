import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

const ImageMatchingGame = () => {
  const [images, setImages] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  const imageSet1 = [
    require('../images/imagematch1.jpg'),
    require('../images/imgaematch2.jpg'),
    require('../images/imagematch3.jpg'),
    require('../images/imagematch4.jpg'),
  ];

  const imageSet2 = [
    require('../images/imgaematch5.jpg'),
    require('../images/imagematch6.jpg'),
    require('../images/imagematch7.jpg'),
    require('../images/imagematch8.jpg'),
  ];

  useEffect(() => {
    const shuffledImages = shuffle([...imageSet1, ...imageSet2, ...imageSet1, ...imageSet2]);
    setImages(shuffledImages);
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
    if (images[firstIndex] === images[secondIndex]) {
      setMatchedIndices((prevMatches) => [...prevMatches, ...indices]);
      setSelectedIndices([]);
      if (matchedIndices.length + 2 === images.length) {
        Alert.alert('Congratulations!', 'You matched all pairs!');
      }
    } else {
      setTimeout(() => {
        setSelectedIndices([]);
      }, 1000);
    }
  };

  const renderImageCards = () => {
    return images.map((image, index) => {
      const isRevealed = selectedIndices.includes(index) || matchedIndices.includes(index);

      return (
        <TouchableOpacity
          key={index}
          style={[styles.card, isRevealed && styles.revealed]}
          onPress={() => handleCardPress(index)}
          activeOpacity={0.7}
          disabled={matchedIndices.includes(index)}
        >
          {isRevealed ? <Image source={image} style={styles.cardImage} /> : null}
        </TouchableOpacity>
      );
    });
  };

  return (
    <ImageBackground
      source={require('../images/background2.png')} // Add the path to your background image
      style={styles.container}
    >
      <View style={styles.gameBoard}>{renderImageCards()}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    width: 100,
    height: 80,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  revealed: {
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default ImageMatchingGame;
