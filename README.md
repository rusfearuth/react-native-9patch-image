# React Native 9patch image

<a href="https://www.npmjs.com/package/react-native-9patch-image"><img src="https://img.shields.io/npm/v/rax.svg"></a>

This module supports of using native 9patch drawables from Android and capInsets from iOS.


## Getting started

Install native module
```
$ npm i --save react-native-9patch-image
```

Link native module with your project
```
$ react-native link react-native-9patch-image
```

Add component to your project
```javascript
import NinePatchView from 'react-native-9patch-image';

<NinePatchView
  source={{ 'uri': 'bubble' }}
  style={{ width: 100, height: 100 }}
  />
```
