import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import { SceneProgress } from './SceneProgress';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
  video: {
    width: 300,
    height: 200,
  },
});

export class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'react-navigation-shared-element',
  };

  render() {
    const { modal } = this.props;

    // Wrap the component that you want to transition in <SharedElement>
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={modal ? this.onPressModal : this.onPress}>
          <SharedElement id="image">
            <Video
              source={require('../broadchurch.mp4')}
              style={styles.video}
              repeat
            />
          </SharedElement>
        </TouchableOpacity>
      </View>
    );
  }

  onPress = () => {
    this.props.navigation.navigate('Detail');
  };

  onPressModal = () => {
    this.props.navigation.navigate('Modal');
  };
}
