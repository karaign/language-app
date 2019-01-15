import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import styles from '../styles/styles';
import {NavigationProp} from 'react-navigation';
import {User} from '../apis/FakeData';

interface State {}

interface Props {
    user: User
}

export class ProfilePreview extends React.Component<Props, State> {
    render() {
        return (
            <View
                style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}
            >
                <Image
                    source={{uri: this.props.user.avatar}}
                    style={{height: 50, width: 50}}
                />
                <Text style={{fontWeight: 'bold'}}>
                    { this.props.user.name }
                </Text>
            </View>
        );
    }
}