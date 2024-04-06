import React, { useEffect } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tts from 'react-native-tts';

const VarnmalaPage = () => {
  const hindiVarnmala = [
    { letter: 'अ', soundText: 'अ' },
    { letter: 'आ', soundText: 'आ' },
    { letter: 'इ', soundText: 'इ' },
    { letter: 'ई', soundText: 'ई' },
    { letter: 'उ', soundText: 'उ' },
    { letter: 'ऊ', soundText: 'ऊ' },
    { letter: 'ऋ', soundText: 'ऋ' },
    { letter: 'ए', soundText: 'ए' },
    { letter: 'ऐ', soundText: 'ऐ' },
    { letter: 'ओ', soundText: 'ओ' },
    { letter: 'औ', soundText: 'औ' },
    { letter: 'अं', soundText: 'अं' },
    { letter: 'अः', soundText: 'अः' },
    { letter: 'क', soundText: 'क' },
    { letter: 'ख', soundText: 'ख' },
    { letter: 'ग', soundText: 'ग' },
    { letter: 'घ', soundText: 'घ' },
    { letter: 'ङ', soundText: 'ङ' },
    { letter: 'च', soundText: 'च' },
    { letter: 'छ', soundText: 'छ' },
    { letter: 'ज', soundText: 'ज' },
    { letter: 'झ', soundText: 'झ' },
    { letter: 'ञ', soundText: 'ञ' },
    { letter: 'ट', soundText: 'ट' },
    { letter: 'ठ', soundText: 'ठ' },
    { letter: 'ड', soundText: 'ड' },
    { letter: 'ढ', soundText: 'ढ' },
    { letter: 'ण', soundText: 'ण' },
    { letter: 'त', soundText: 'त' },
    { letter: 'थ', soundText: 'थ' },
    { letter: 'द', soundText: 'द' },
    { letter: 'ध', soundText: 'ध' },
    { letter: 'न', soundText: 'न' },
    { letter: 'प', soundText: 'प' },
    { letter: 'फ', soundText: 'फ' },
    { letter: 'ब', soundText: 'ब' },
    { letter: 'भ', soundText: 'भ' },
    { letter: 'म', soundText: 'म' },
    { letter: 'य', soundText: 'य' },
    { letter: 'र', soundText: 'र' },
    { letter: 'ल', soundText: 'ल' },
    { letter: 'व', soundText: 'व' },
    { letter: 'श', soundText: 'श' },
    { letter: 'ष', soundText: 'ष' },
    { letter: 'स', soundText: 'स' },
    { letter: 'ह', soundText: 'ह' },
    { letter: 'क्ष', soundText: 'क्ष' },
    { letter: 'त्र', soundText: 'त्र' },
    { letter: 'ज्ञ', soundText: 'ज्ञ' },
  ];

  useEffect(() => {
    // Set the language to Hindi
    Tts.setDefaultLanguage('hi');

    return () => {
      Tts.stop();
      Tts.shutdown();
    };
  }, []);

  const handlePress = (soundText) => {
    // Adjust the rate value for slower speed, e.g., 0.1 for slower speed
    Tts.speak(soundText, { rate: 0.05 });
  };

  return (
    <ImageBackground
      source={require('../images/background2.png')} // Replace with the actual path to your image
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {hindiVarnmala.map(({ letter, soundText }, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handlePress(soundText)}
            >
              <Text style={styles.title}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent', // Set to 'transparent' to allow the background image to show
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fafafa', // Light gray background for cards
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
    width: '48%', // Adjust the width as needed
    borderWidth: 1,
    borderColor: '#e0e0e0', // Border color
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333', // Dark text color
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' as per your requirement
  },
});

export default VarnmalaPage;
