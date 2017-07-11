import * as actionTypes from './action-types'
export default function (state = {words: [],hint:''}, action = {}) {
    switch (action.type) {
        case actionTypes.SEARCH:
            console.log('a');
            return {...state, hint:'搜索中'};
        case actionTypes.SEARCH_SUCCESS:
            return {words:action.words,hint:''};
        default:
            return state;
    }
}
