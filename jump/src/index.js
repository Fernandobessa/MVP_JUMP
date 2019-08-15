import React from 'react';
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware,createStore,combineReducers} from 'redux'
import UserSessions from './Components/UserSessions/UserSessions'
import UserSessionsReducer from './Components/UserSessions/UserSessionsReduces'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    usersessions : UserSessionsReducer,
    srctext : UserSessionsReducer
    
})

const store = createStore(reducers,applyMiddleware(thunk))

ReactDom.render((
<Provider store={store}>
    <div>
    <UserSessions initialValue='Teste'/>
    </div>
</Provider>
), document.getElementById('root'));   