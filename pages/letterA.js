import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const letterA = () => {
  return (
    <View style={styles.container}>
      {/* Video Section */}
      <View style={styles.videoContainer}>
        <Video
          source={require('../video/a.mp4')}
          style={styles.video}
          controls={true}
        />
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/a.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
    width: '100%', // Set the video width to 100% of the parent container
    height: 200, // Set the desired height for the video
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
    borderRadius: 10,
  },
});

export default letterA;
