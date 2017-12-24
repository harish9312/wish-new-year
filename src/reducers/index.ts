import { combineReducers } from 'redux';
import wisherReducer from './wisherReducer';

export const rootReducer = combineReducers({
    wisher: wisherReducer
});

export default rootReducer; 