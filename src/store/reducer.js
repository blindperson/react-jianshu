import {combineReducers} from "redux"

function author(state=[],action){
    switch (action.type) {
        case "SET_Author":
            return action.value;
        default:
            return state;
    }
}
 
function  article(state=[],action) {
    switch (action.type) {
        case "SET_Article":
            return action.value;
        default:
            return state;
    }
}
 

export default combineReducers({
    // 主页推荐作者
    author,
    // 主页文章推荐
    article
});