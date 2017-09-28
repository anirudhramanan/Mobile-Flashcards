import * as Types from '../actions/actionTypes';

function decks(state = {}, action) {
    switch (action.type) {
        case Types.FETCH_DECKS:
            return {...state, ...action.decks};

        case Types.ADD_DECK:
            return {...state, ...action.deck};

        case Types.ADD_QUESTION:
            const {title, questions, question, answer} = action.params;
            let newQuestions = JSON.parse(JSON.stringify(questions));
            newQuestions[newQuestions.length] = {question: question, answer: answer};

            return {
                ...state,
                [title]: {...state[title], questions: newQuestions},
            };

        default:
            return state;
    }
}

export default decks;
