import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/index.js';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {setNotification} from '../util/notificationAPI';
import NewDeck from './deck/NewDeck';
import DeckList from './deck/DeckList.js';
import IndividualDeck from './deck/IndividualDeck.js';
import NewQuestion from './question/NewQuestion';
import Quiz from './quiz/Quiz.js'

const Tabs = TabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'All Decks'
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
            },
        },
    }
);

const AppNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {title: 'Home'},
    },
    IndividualDeck: {
        screen: IndividualDeck,
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'Add Question',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    },
});

export default class Index extends React.Component {
    componentDidMount() {
        setNotification();
    }

    render() {
        return <Provider store={createStore(reducer)}>
            <View style={{flex: 1}}>
                <AppNavigator />
            </View>
        </Provider>
    }
}
