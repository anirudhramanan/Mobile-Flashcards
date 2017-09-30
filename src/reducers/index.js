import * as Types from '../actions/actionTypes';

function decks(state = {}, action) {
    switch (action.type) {
        case Types.FETCH_DECKS:
            return {...state, ...action.decks};

        case Types.ADD_DECK:
            return {...state, ...action.deck};

        case Types.ADD_QUESTION:
            const {title, questions, question, answer} = action.params;
            const newQuestions = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);

            return {
                ...state,
                [title]: {...state[title], questions: newQuestions},
            };

        default:
            return state;
    }
}

export default decks;
