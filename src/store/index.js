/**
 * Created by Administrator on 2017/7/11.
 */
//从redux 中引入createStore 它是一个函数
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer'
//创建store
let store = applyMiddleware(thunk)(createStore)(reducer);
//默认导出一个store
export default store;
