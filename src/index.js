/**
 * Created by Administrator on 2017/7/11.
 */
//redux react redux-thunk redux-logger react-redux
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import store from './store';


render(<Provider store = {store}><App/></Provider>,document.querySelector('#root'));