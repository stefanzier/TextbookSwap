import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import styles from 'TextbookSwap/app_styles';

export default class HeaderImage extends Component {
  render() {
    return (
      <View style={styles.bgImageContainer}>
        <Image source={require('TextbookSwap/assets/scu-blurred-library.png')} style={styles.bgImage}>
          <View style={styles.bgImageIconContainer} >
            <Image source={require('TextbookSwap/assets/textbook-icon.png')} style={styles.bgImageIcon} />
          </View>
        </Image>
      </View>
    );
  }
}