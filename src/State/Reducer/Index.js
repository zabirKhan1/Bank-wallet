import { combineReducers } from 'redux';
import Amountreducer from './Amountreducer';

const reducers = combineReducers({
  account: Amountreducer,
});

export default reducers;
