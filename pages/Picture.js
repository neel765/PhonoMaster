import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import images
import backgroundImage from '../images/background2.png'; // Replace with your background image
import iconImage from '../images/icon4.png'; // Replace with your icon image
import image1 from '../images/image1.png';
import image10 from '../images/image10.png';
import image11 from '../images/image11.png';
import image12 from '../images/image12.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';
import image9 from '../images/image9.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
const words = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'];

const Picture = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getCurrentImage = () => {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.slide}>
            <Image
              source={images[currentPage]}
              style={[styles.image, styles.roundedImage]}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
              <Image source={iconImage} style={styles.iconImage} />
            </View>
            {currentPage > 0 && (
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.buttonText}>पिछला </Text>
              </TouchableOpacity>
            )}
            {currentPage < images.length - 1 && (
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.buttonText}>आगे </Text>
              </TouchableOpacity>
            )}
            <View style={styles.wordsContainer}>
              <Text style={styles.wordText}>{words[currentPage]}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return getCurrentImage();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'green',
  },
  roundedImage: {
    borderRadius: 15,
  },
  overlay: {
    position: 'absolute',
  },
  iconImage: {
    left: 0,
    bottom: 200,
    width: 300,
    height: 300,
  },
  wordsContainer: {
    position: 'absolute',
    top: 305, // Adjust the position as needed
  },
  wordText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    position: 'absolute',
    left: 20,
    bottom: 8,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    position: 'absolute',
    right: 20,
    bottom: 8,
  },
});

export default Picture;