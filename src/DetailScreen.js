import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { SceneProgress } from './SceneProgress';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    <SharedElement id="image">
      <Video
        source={require('../broadchurch.mp4')}
        style={styles.video}
        repeat
      />
    </SharedElement>
  </View>
);

DetailScreen.navigationOptions = {
  title: 'Boys will be boys',
};

// Add the `sharedElements` function to the component, which
// should return a list of shared-elements to transition.
// The `sharedElements` function is called whenever you navigate
// to or from this screen. You can use the provided navigation
// states or trigger or disable animations.
DetailScreen.sharedElements = (route, otherRoute, showing) => [
  { id: 'image' },
  { id: 'text', animation: 'fade' },
];
