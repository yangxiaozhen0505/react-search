import $ from 'jquery'
import * as actionTypes from './action-types'
export default{
    //wd 关键字 cb 回调函数参数名
    search: (keywords) => {
        return function (dispatch) {
            $.ajax({
                url: `http://www.baidu.com/su`,
                type: 'GET',
                data:{wd:keywords},
                jsonp: 'cb',
                dataType: 'jsonp',
                success: (result) => {
                    dispatch({type: actionTypes.SEARCH_SUCCESS, words: result.s})
                }
            })
        }
    }
}