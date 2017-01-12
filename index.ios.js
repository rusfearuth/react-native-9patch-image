import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';


class NinePatchView extends Component {
  render() {
    return (
      <Image
        {...this.props}
        resizeMode={Image.resizeMode.stretch}
      />
    );
  }
}

export default NinePatchView;
