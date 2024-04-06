// Import necessary React Native components
import React, { useEffect } from 'react';
import { BackHandler, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// Create your functional component
const Home = ({ navigation }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      if (navigation.isFocused()) {
        BackHandler.exitApp();
        // If the user is on the Home screen
        // Prevent default behavior when the back button is pressed
        return true;
      }
      // Allow default behavior for other screens
      return false;
    });

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, [navigation]);

  const handleLogout = () => {
    // You can perform additional logout logic here if needed
    navigation.navigate("First1"); // Navigate to the "First1" page (login)
  };

  const cardImages = [
      require('../images/video.png'),
      require('../images/picture.png'),
      require('../images/sound.jpg'),
      require('../images/colormatch.jpg'),
      require('../images/lettermatching.jpg'),
      require('../images/wordmatch.jpg'),
      require('../images/blackboard.png'),
      require('../images/contract.png'),
  ];

  const cardTexts = [
    'वीडियो',
    'तस्वीर',
    'आवाज़',
    'रंग मिलान खेल',
    'शब्द मिलान खेल',
    'तस्वीर मिलाओ खेल',
    'अभ्यास बोर्ड',
    'परीक्षा',
    // 'टेस्ट',
  ];

  const handleCardPress = (index) => {
    // Handle card press, you can navigate to a new screen or perform any action
    console.log(`Card ${index + 1} pressed`);
    // Example: Navigate to a different screen based on the card index
    switch (index) {
      case 0:
        navigation.navigate("video");
        break;
      case 1:
        navigation.navigate("Picture");
        break;
        case 2:
          navigation.navigate("audio");
          break;
          case 3:
          navigation.navigate("color");
          break;
          case 4:
          navigation.navigate("Word");
          break;
          case 5:
          navigation.navigate("imagematch");
          break;
          case 6:
          navigation.navigate("Blackboard");
          break;
          case 7:
          navigation.navigate("Exam");
          break;
        
      // Add cases for other cards as needed
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground source={require('../images/back2.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* Header with parental dashboard, logo, and welcome text */}
          <View style={styles.header}>
            {/* Set your parental dashboard image */}
            <TouchableOpacity onPress={() => navigation.navigate("TestScore")} >
            <Image source={require('../images/profile-user.png')} style={styles.parentalDashboard} />
            </TouchableOpacity>
          
            <Image source={require('../images/sk.png')} style={styles.logo} />
            <TouchableOpacity onPress={handleLogout}>
              {/* Replace the "Logout" button with a logout logo */}
              <Image source={require('../images/logout.png')} style={styles.logoutLogo} />
            </TouchableOpacity>
          </View>
          {/* Cards section */}
          <ScrollView style={styles.cardsContainer}>
            {/* Welcome text */}
            <Text style={styles.welcomeText}>सुस्वागतम</Text>

            {/* Nine cards in one row */}
            <View style={styles.cardRow}>
              {cardImages.map((imageSource, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCardPress(index)}
                  activeOpacity={0.7}
                  style={styles.touchableCard}
                >
                  <View style={styles.card}>
                    {/* Image on your card */}
                    <Image source={imageSource} style={styles.cardImage} />

                    {/* Content of your card */}
                    <Text style={styles.cardText}>{cardTexts[index]}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

// Create a StyleSheet to define your styles
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(52, 152, 219, 0.7)', // Change the background color with alpha as needed
  },
  parentalDashboard: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
  logoutLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flex: 1,
    padding: 16,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  touchableCard: {
    width: '45%', // Adjust the width based on your design
    aspectRatio: 1, // Maintain square aspect ratio
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(236, 240, 241, 0.8)', // Change the background color with alpha as needed
    padding: 20,
    borderRadius: 7,
    marginBottom: 30,
    elevation: 3, // For Android shadow
    shadowOffset: { width: 3, height: 3 }, // For iOS shadow
    shadowColor: 'black',
    shadowOpacity: 1,
    marginTop: 20,
    width: '87%',
    height: '200',
    marginLeft: 10,
  },
  cardImage: {
    width: '90%',
    height: '110%', // Adjust the height based on your design
    resizeMode: 'stretch',
    marginBottom: 10,
    borderRadius: 8,
  },
  cardText: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
