import axios from "axios" 



// 主页推荐五个作者
function newAuthor(){
    return dispatch=>{
        return  axios({
                    method:"get", 
                    url:"/users/recommended",
                    params:{ 
                        seen_ids:"",
                        count:5,
                        only_unfollowed:true
                    },
                    headers: { 'Accept': 'application/json',"If-None-Match":"W/\"f43c63eb8a15a59d9314c91e5baef8ac\"","referer":"https://www.jianshu.com/"}
            }).then(res => {
                dispatch(setAuthor(res.data.users))
            });
    }
} 
function setAuthor(value){
    return{
        type: "SET_Author",
        value
    }
}
// 主页推荐文章
var list = null;
function queryArticle() {
    return dispatch=>{
        return  axios({
            method:"get", 
             url:"/asimov/trending/now", 
             headers: { 'Content-Type': 'application/json;charset=utf-8'}
        }).then(res => {  
            if (list) {
                list.concat(res.data)
            }else{
                list = res.data
            }
            dispatch(setArticle(list))
            console.log(list)
        });
    }
}
function setArticle(value) {
    return{
        type: "SET_Article",
        value
    }
}
 
export {
    newAuthor,setAuthor,queryArticle
}