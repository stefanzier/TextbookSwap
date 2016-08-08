import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {

} from 'react-native';

// Components
import Home from '../home/home';
import BookList from '../buy/book_list';
import NewListing from '../new_listing/new_listing';

export default class TabBar extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 60}}
        initialPage={0}
        tabBarUnderlineColor="#FA2D65"
        tabBarBackgroundColor="#7790E6"
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="white"
        renderTabBar={() => <ScrollableTabBar />}
      >
        <BookList tabLabel="Buy" />
        <Home tabLabel="Swap" />
        <NewListing tabLabel="List a book" />
      </ScrollableTabView>
    );
  }
}