import React, { Component } from 'react';
import {
  View,
  Image,
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
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          source={normalizedSource}
          resizeMode={Image.resizeMode.stretch}
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

export default NinePatchView;
