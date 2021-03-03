import {
    SETSEARCH, MINPRICE, MAXPRICE, SETSTRING, NEWCONDITION, USEDCONDITION, MODIFYRESULTS
} from './actions.js';

const initialState = {
    results: [],
    resultsMin: [],
    resultsMax: [],
    resultsNew: [],
    resultsUsed: [],
    string: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETSEARCH:
            return {
                ...state,
                results: action.payload,
            }
        case MAXPRICE:
            return {
                ...state,
                results: [...state.results.sort((a, b) => b.price - a.price)]
            }
        case MINPRICE:
            return {
                ...state,
                results: [...state.results.sort((a, b) => a.price - b.price)]
            }
        case SETSTRING:
            return {
                ...state,
                string: action.payload
            }
        case NEWCONDITION:
            console.log(action.payload)
            return {
                ...state,
                resultsNew: [...state.results.filter(r => r.condition === "new")]
            }
        case USEDCONDITION:
            return {
                ...state,
                resultsUsed: [...state.results.filter(r => r.condition === "used")]
            }
        case MODIFYRESULTS:
            console.log(action.payload)
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}

export default resultReducer