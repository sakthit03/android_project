import { createStore, combineReducers } from 'redux';
import {combinedReducers} from './Reducers/reducer';

export const store = createStore(combinedReducers);