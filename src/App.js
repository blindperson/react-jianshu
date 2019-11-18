import React,{Component} from 'react'; 
import './App.css';
// 导入组件
import Home from './view/Home/Home'
import Article from './view/Article/Article'
import Login from "./view/Login/Login"
import Logup from "./view/Logup/Logup"
import Search from "./view/Search/Search"
import Write from "./view/Write/Write"
import Header from './view/Header/Header' 
import DownLoad from './view/DownLoad/DownLoad' 
import Publications from './view/Publications/Publications' 
import {Route,HashRouter,Switch} from "react-router-dom"
class App extends Component{
  render(){
    return(
      <div>
       
        <HashRouter>
          <Header></Header> 
          <Switch> 
            {/* 主页 */}
            <Route path='/' exact component={Home}></Route>
            {/* 文章页 */}
            <Route path='/p/:id' exact component={Article}></Route>
            {/* 注册 */}
            <Route path='/sign_up' exact component={Login}></Route>
            {/* 登陆 */}
            <Route path='/sign_in' exact component={Logup}></Route>
            {/* 搜索页 */}
            <Route path='/search/:text' exact component={Search}></Route>
            {/* 写文章 */}
            <Route path='/write' exact component={Write}></Route>
            {/* 下载APP页面 */}
            <Route path='/download' exact component={DownLoad}></Route>
            {/* 简书版权 */}
            <Route path='/publications' exact component={Publications}></Route>
          </Switch> 
        </HashRouter>
      </div>
    )
  }
}

export default App;
