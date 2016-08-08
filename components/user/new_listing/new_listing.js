import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';

import firebaseApp from 'TextbookSwap/firebase_setup';
import styles from 'TextbookSwap/app_styles';

// TODO: 1. renderSellForm() and renderSwapForm()
//       2. create toggle to change formState
//       3. upload image from device/camera roll
//       4. grab form data
//       5. upload and display <Loading />
//       6. Handle errors if any
//            - if errors, alert user 
//            - if no errors clear form and proceed
//       7. redirect user to profile page
//       8. display listing on profile page

export default class NewListing extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      toggleForm: false, // true: sell | false: swap 
      bookTitle: '',
      bookAuthor: '',
      bookCourse: '',
      bookCondition: '',
      bookType: ''
    };
  }

  render() {
    return (
      <View>
        {this.renderCommonFormFields()}
      </View>
    );
  }

  renderSellForm() {
    return (
      <View style={[styles.listingTextInputContainer, styles.listingContainerDefault]}>
        <Text style={styles.listingSelectText}>Price:</Text> 
        <TextInput
          placeholder="Price of book..."
          style={[styles.listingTextInput, {marginLeft: 32}]}
          autoCorrect={true}
          onChangeText={(bookPrice) => this.setState({bookPrice})}
        />
      </View>
    );
  }

  renderSwapForm() {
    return (
      <View>
      </View>
    );
  }

  renderCommonFormFields() {
    let toggleFormState = this.state.toggleForm;
    var index = 0;

    const courses = [
      { key: index++, section: true, label: 'Choose a course...' },
      { key: index++, label: 'Accounting' },
      { key: index++, label: 'Aerospace Studies' },
      { key: index++, label: 'Anthropology' },
      { key: index++, label: 'Arabic' },
      { key: index++, label: 'Computer Science' },
      { key: index++, label: 'Computer Engineering' },
      { key: index++, label: 'Engineering' },
      { key: index++, label: 'Engineering Management' },
      { key: index++, label: 'English' },
      { key: index++, label: 'German Studies' },
      { key: index++, label: 'History' },
      { key: index++, label: 'Honors Program' },
      { key: index++, label: 'Japanese Studies' },
      { key: index++, label: 'Physics' }
    ];

    const conditions = [
      { key: index++, section: true, label: 'Choose a condition...' },
      { key: index++, label: 'New' },
      { key: index++, label: 'Refurbished' },
      { key: index++, label: 'Used - Like new' },
      { key: index++, label: 'Used - Very good' },
      { key: index++, label: 'Used - Good' },
      { key: index++, label: 'Used - Acceptable' },
      { key: index++, label: 'Used - Not good' }
    ];

    const types = [
      { key: index++, section: true, label: 'Choose a book type...' },
      { key: index++, label: 'Hardback' },
      { key: index++, label: 'Paperback' },
      { key: index++, label: 'Loose Leaf' }
    ];
    return (
      <View>
        <View style={[styles.listingSelectContainer, styles.listingContainerDefault]}>
          <Text style={styles.listingSelectText}>I want to:</Text> 
          <View style={styles.listingSelectButtonContainer}>
            <TouchableOpacity 
              style={toggleFormState ? styles.listingSelectButtonInactive : styles.listingSelectButtonActive}
              onPress={() => this.setState({toggleForm: !toggleFormState})}
            >
              <Text 
                style={toggleFormState ? styles.listingSelectButtonTextInactive : styles.listingSelectButtonTextActive}
              >
                Swap
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={toggleFormState ? styles.listingSelectButtonActive : styles.listingSelectButtonInactive}
              onPress={() => this.setState({toggleForm: !toggleFormState})}
            >
              <Text
                style={toggleFormState ? styles.listingSelectButtonTextActive : styles.listingSelectButtonTextInactive}
              >
                Sell
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.uploadPicContainer, styles.listingContainerDefault]}>
          <TouchableOpacity
            style={styles.uploadPicButton}
          >
            <Text style={styles.uploadPicButtonText}>Upload a Picture</Text> 
          </TouchableOpacity> 
        </View>

        <View style={[styles.listingTextInputContainer, styles.listingContainerDefault]}>
          <Text style={styles.listingSelectText}>Title:</Text> 
          <TextInput
            placeholder="Book title..."
            style={[styles.listingTextInput, {marginLeft: 32}]}
            autoCorrect={true}
            onChangeText={(bookTitle) => this.setState({bookTitle})}
          />
        </View>

        <View style={[styles.listingTextInputContainer, styles.listingContainerDefault]}>
          <Text style={styles.listingSelectText}>Author:</Text> 
          <TextInput
            placeholder="Book author..."
            style={[styles.listingTextInput, {marginLeft: 15}]}
            autoCorrect={true}
            onChangeText={(bookAuthor) => this.setState({bookAuthor})}
          />
        </View>

        <View style={[styles.listingTextInputContainer, styles.listingContainerDefault]}>
          <Text style={styles.listingSelectText}>Course:</Text> 
          <ModalPicker
            style={{marginLeft: 13}} 
            data={courses}
            initValue="Choose a course"
            onChange={(bookCourse) => this.setState({bookCourse})}
          />
        </View>

        <View style={[styles.listingTextInputContainer, styles.listingContainerDefault]}>
          <Text style={styles.listingSelectText}>Condition:</Text> 
          <ModalPicker
            style={styles.listingPicker} 
            data={conditions}
            initValue="Choose a condition"
            onChange={(bookCondition) => this.setState({bookCondition})}
          />
        </View>

        <View style={[styles.listingTextInputContainer, styles.listingContainerDefault]}>
          <Text style={styles.listingSelectText}>Type:</Text> 
          <ModalPicker
            style={[styles.listingPicker, {marginLeft: 29}]} 
            data={types}
            initValue="Choose a book type"
            onChange={(bookType) => this.setState({bookType})}
          />
        </View>

        {this.state.toggleForm ? this.renderSellForm() : this.renderSwapForm()}

        <View style={styles.listItButtonContainer}>
          <TouchableOpacity style={styles.listItButton}>
            <Text style={styles.listItButtonText}>List it!</Text>
          </TouchableOpacity>
        </View>
      </View>
    ); 
  }
}