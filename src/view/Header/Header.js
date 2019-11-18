import React,{Component} from 'react';
import './Header.css'; 
import {Icon} from "antd"
import { Link} from "react-router-dom" 
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            // 是否点击搜索框
            isClick:false,
            // 搜索内容
            serachText:"",
            // 点击首页还是搜索
            Index:"a"
        };
    }
    render(){
        return( 
            <nav className="navbar">
                <div className="width-limit">
                    {/* Logo */} 
                    <Link to="/" className="logo">
                        <img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
                    </Link> 
                    {/* 未登录 target="_blank" 写文章、注册、登陆*/}
                    {/*  eslint-disable-next-line */}
                    <Link className="btn write-btn" to="/write" > <Icon type="edit" className="ic-write" />写文章</Link>
                    <Link className="btn sign-up" id="sign_up" to="/sign_up" >注册</Link>
                    <Link className="btn log-in" id="sign_in" to="/sign_in" >登陆</Link>
                    {/* 图片beta */}
                    <div className="betaPic">
                        <Link to="/" >
                            <img src="//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png" alt=""/>
                        </Link>
                    </div>
                    {/* Aa */}
                    <div className="style-mode">
                        <i className="style-mode-btn">Aa</i>
                    </div>
                    {/* 首页、下载APP、搜索 */}
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="tab" onClick={()=>{this.changeNum('a')}}><Link to="/" className={this.state.Index==='a'?"active":""}> <Icon type="compass"/>&nbsp;首页</Link></li> 
                            <li className="tab"  onClick={()=>{this.changeNum('b')}}><Link to="/download" className={this.state.Index==='b'?"active":""}> <Icon type="download" />&nbsp;下载APP</Link></li>
                            <li className="search">
                                <form action={`#/search/${this.state.serachText}`} >
                                    <input type="text" placeholder="搜索" onChange={this.axiosChange} onFocus={this.isClickState}  onBlur={this.isClickState}/>
                                    <Icon type="search" className={`${this.state.isClick&&'anticon-search-active'}`} />
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        )
    };
    isClickState =()=>{
        this.setState({
            isClick:!this.state.isClick
        })
    } 
    axiosChange = (e)=>{ 
        this.setState({
            serachText:e.target.value
        })
    }
    changeNum = (index)=>{
        this.setState({
            Index:index
        })
    }
} 
 
export default  Header;