import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT
} from '../constants/ActionTypes';

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    console.log('count reducer', state)

    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default counterReducer
