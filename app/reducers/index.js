import {combineReducers} from 'redux'

import {default as home} from '../models/home'
import {default as cover} from '../models/cover'

export const rootReducer = combineReducers({
  home,
  cover
});
