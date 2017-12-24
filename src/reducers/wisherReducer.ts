import { SET_WISHER_NAME } from '../constants/actions';
import { fromJS } from 'immutable';

function wisherReducer(state = fromJS({}), action: any) {
    switch (action.key) {
        case SET_WISHER_NAME:
            state.set('wisherName', action.wiser);
        default:
            return state;
    }
}

export default wisherReducer;