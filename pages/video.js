import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HindiLetterCard = ({ letter, index }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    switch (index) {
      case 0:
        navigation.navigate("letterA"); // Add the appropriate screen name for index 0
        break;
      case 1:
        navigation.navigate("Ao");
        break;
      case 2:
        navigation.navigate("");
        break;
      case 3:
        navigation.navigate(""); // Add the appropriate screen name for index 3
        break;
      case 4:
        navigation.navigate(""); // Add the appropriate screen name for index 4
        break;
      case 5:
        navigation.navigate("");
        break;
      case 6:
        navigation.navigate(""); // Add the appropriate screen name for index 6
        break;
      case 7:
        navigation.navigate(""); // Add the appropriate screen name for index 7
        break;
      default:
        // Handle default case or remove this block if not needed
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.letter}>{letter}</Text>
    </TouchableOpacity>
  );
};

const video = () => {
  const hindiLetters = ['अ','औ', 'ओ','आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ',]; // Add more letters as needed

  return (
    <ImageBackground
      source={require('../images/background2.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        {hindiLetters.reduce((rows, letter, index) => {
          if (index % 2 === 0) {
            rows.push(
              <View key={index} style={styles.row}>
                <HindiLetterCard letter={letter} index={index} />
              </View>
            );
          } else {
            rows[rows.length - 1] = (
              <View key={index} style={styles.row}>
                {rows[rows.length - 1]}
                <HindiLetterCard key={index} letter={letter} index={index} />
              </View>
            );
          }
          return rows;
        }, [])}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjust spacing between cards
    width: '75%', // Ensure the row takes the full width
    marginBottom: 20, // Add margin between rows
  },
  card: {
    width: 100, // Adjust the width of each card
    height: 90, // Adjust the height of each card
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8, // Adjust the padding inside each card
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginLeft: -100, // Move the card slightly to the left
  },
  letter: {
    fontSize: 24, // Adjust the font size of the letter
    fontWeight: 'bold',
    color: '#333',
  },
});

export default video;
