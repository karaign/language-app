import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import styles from '../styles/styles';
import {NavigationProp} from 'react-navigation';

interface State {

}

interface Props {
    navigation: NavigationProp<State>
}

export class SearchCriteria extends React.Component<Props, State> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.info}>
                    Find __________ speakers
                </Text>
                <Text style={styles.info}>
                    in ___________
                </Text>
                <View style={{width: '25%'}}>
                    <Button
                        title="Search"
                        //@ts-ignore
                        onPress={() => this.props.navigation.navigate('Results')}
                    />
                </View>
            </View>
        )
    }
}

