import * as Types from './actionTypes';

export function getDecks(decks) {
    return {
        type: Types.FETCH_DECKS,
        decks,
    };
}

export function addDeck(deck) {
    return {
        type: Types.ADD_DECK,
        deck,
    };
}

export function addQuestion(params) {
    return {
        type: Types.ADD_QUESTION,
        params,
    };
}
