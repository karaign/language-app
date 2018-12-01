/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View, ToolbarAndroid} from 'react-native';
// @ts-ignore
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import {ChatScreen} from './components/ChatScreen';
import {SearchScreen} from './components/SearchScreen';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

//TODO: Authenticate, show login screen if not logged in, load user data

const TabNavigator = createBottomTabNavigator({
  Search: SearchScreen,
  Chat: ChatScreen,
}, {
  //@ts-ignore
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName: string = "";
      if (routeName == "Search") {
        iconName = 'search';
      } else if (routeName == "Chat") {
        iconName = 'comments';
      }
      return <Icon
        name={iconName}
        size={20}
        color={tintColor}
      />;
    }
  }),
  tabBarOptions: {
    inactiveTintColor: 'gray',
    activeTintColor: 'blue'
  }
});

export default createAppContainer(TabNavigator);