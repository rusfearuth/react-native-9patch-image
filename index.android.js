import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  requireNativeComponent,
} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

class NinePatchView extends Component {
  render() {
    const {
      children,
      source,
      ...rest
    } = this.props;

    const normalizedSource = resolveAssetSource(source);

    return (
      <View {...rest}>
        <RCTImageCapInset
          style={styles.capInset}
          source={normalizedSource}
        />
        {children}
      </View>
    );
  }
}

NinePatchView.propTypes = {
  ...View.propTypes,
  source: Image.propTypes.source,
};

const RCTImageCapInset = requireNativeComponent('RCTImageCapInset', {
  propTypes: NinePatchView.propTypes,
});

const styles = StyleSheet.create({
  capInset: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default NinePatchView;
