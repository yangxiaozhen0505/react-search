/**
 * Created by Administrator on 2017/7/11.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css'
import actions from '../store/actions'
class App extends Component {

    handleChange = (event) => {
        //先获取到关键字

        let keywords = event.target.value;
        // 再进行搜索
        this.props.search(keywords);
    };

    render() {
        return (
            <div className="container">
                <div className="search-area">
                    <div className="log">
                        <img src="http://t.cn/RU9vHxQ" alt=""/>
                    </div>
                    <div className="search">
                        <input type="text" onChange={this.handleChange}/>
                        <span>百度一下</span>
                    </div>
                </div>
                {this.props.hint?<div>{this.props.hint}</div>:null}
                {this.props.words.length>0?
                    <ul className="words">
                    {
                        this.props.words.map((word, index) => (
                            <li className="word" key={index}>{word}</li>
                        ))
                    }
                    </ul>
                    :null}

            </div>
        )
    }
}
//把store里的状态映射为属性对象
let mapStateToProps = state => state;
let mapDispatchToProps = actions;
export default connect(mapStateToProps, mapDispatchToProps)(App)