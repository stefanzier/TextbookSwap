import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from 'TextbookSwap/app_styles';

export default class Book extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.bookContainer}>
          <View style={styles.bookThumbImageContainer}>
            <Image source={this.props.image} style={styles.bookThumbImage}/>
          </View>
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{this.props.title}</Text>
            <Text style={styles.bookAuthor}>By: {this.props.author}</Text>
            <View style={{flex:1, flexDirection: 'row'}}>
              <Text style={styles.bookCategory}>{this.props.category}</Text>
              <Text style={styles.bookPrice}>{this.props.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}