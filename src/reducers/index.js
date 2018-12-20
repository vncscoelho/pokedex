import { combineReducers } from 'redux';
import pokedex from './pokedex';

export const Reducers = combineReducers({
    pokedex: pokedex
});
