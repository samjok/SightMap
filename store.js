import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import activeScreenReducer from './reducers/activeScreenReducer';
import cardReducer from './reducers/cardReducer';

const reducer = combineReducers({
  activeScreen: activeScreenReducer,
  card: cardReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
