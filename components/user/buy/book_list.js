import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import firebaseApp from 'TextbookSwap/firebase_setup';
import styles from 'TextbookSwap/app_styles';

// Components
import Book from './book';

export default class BookList extends Component {
  render() {
    return (
      <ScrollView style={styles.bookListContainer}>
        <Book 
          id="123"
          image={require('TextbookSwap/assets/test_book.png')}
          title="Logic Design and Computer Fundamentals"
          author="Morris M. Something"
          category="Computer Engineering"
          price="$130"
          condition="New"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deserunt totam nam voluptates quos blanditiis dolorum tempora temporibus commodi, nihil amet, dolore numquam eveniet repudiandae delectus doloribus ratione quae perferendis!"
        />
      </ScrollView> 
    );
  }
}