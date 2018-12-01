import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {SearchCriteria} from './SearchCriteria';
import {SearchResults} from './SearchResults';

export const SearchScreen = createStackNavigator({
    Criteria: {screen: SearchCriteria},
    Results: {screen: SearchResults}
}, {
    initialRouteName: 'Criteria'
});