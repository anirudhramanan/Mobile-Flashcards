import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addQuestion} from '../../actions';
import {connect} from 'react-redux';
import {addQuestionForDeck} from '../../util/storageApi';

class NewQuestion extends React.Component {

    state = {
        question: '', answer: ''
    };

    submitQuestion = () => {
        let alert = {};
        const {question, answer} = this.state;
        const {title, questions} = this.props.navigation.state.params;

        if (question === '') {
            Alert.alert('Mandatory', 'Question cannot be empty');
            return;
        }
        if (answer === '') {
            Alert.alert('Mandatory', 'Answer cannot be empty');
            return;
        }

        const params = {title, questions, question, answer};

        this.props.dispatch(addQuestion(params));

        addQuestionForDeck({
            card: {question, answer},
            deckName: title
        });

        Alert.alert('Successful', 'Question Added Successfully',
            [
                {
                    text: 'OK', onPress: () =>
                    this.props.navigation.goBack()
                }
            ],);
    };

    render() {
        const {question, answer} = this.state;

        return (
            <View style={style.container}>
                <Text>Question is </Text>
                <TextInput
                    defaultValue="Question"
                    value={question}
                    style={style.input}
                    onChangeText={question => this.setState({question})}/>
                <Text>Answer is </Text>
                <TextInput
                    defaultValue="Answer"
                    value={answer}
                    style={style.input}
                    onChangeText={answer => this.setState({answer})}/>

                <TouchableOpacity
                    onPress={this.submitQuestion}
                    style={style.submitButton}>
                    <Text style={style.submitText}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: 300,
        height: 56,
        padding: 12,
        borderWidth: 1,
        borderColor: '#7f7f7f',
        margin: 16
    },
    submitButton: {
        backgroundColor: '#000',
        padding: 12,
        height: 44,
    },
    submitText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(NewQuestion);
