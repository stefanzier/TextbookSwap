import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Home from '../home/home';
import {

} from 'react-native';

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
        <Home tabLabel="Buy" />
        <Home tabLabel="Swap" />
        <Home tabLabel="Sell" />
      </ScrollableTabView>
    );
  }
}