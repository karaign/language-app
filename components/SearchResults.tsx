import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {users} from '../apis/FakeData';
import { ProfilePreview } from './ProfilePreview';

export class SearchResults extends React.Component {
    render () {
        return <View>
            <Text>{ users.length } results found.</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <ProfilePreview user={item} />}
            />
        </View>
    }
}