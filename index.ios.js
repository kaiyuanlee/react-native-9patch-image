import React, { Component } from 'react';
import {
  ImageBackground,
} from 'react-native';


class NinePatchView extends Component {
  render() {
    return (
      <ImageBackground
        {...this.props}
        resizeMode='stretch'
      />
    );
  }
}

export default NinePatchView;
