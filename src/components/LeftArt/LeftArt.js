
import  "./LeftArt.css";
import React,{Component} from 'react'
import { Col,Icon} from 'antd';  
import {connect} from "react-redux"; 
import MoreArt from '../MoreArt/MoreArt' 
class LeftArt extends Component{
    constructor(props){
        super(props);
        this.state={} 
    }
    render(){
        return(

            <Col span={16} className="main">
                {/* 首页图 */}
                <div className="carousel">
                    {/* eslint-disable-next-line */}
                    <a href="http://product.dangdang.com/28471013.html" target="_blank">
                        <img src="//upload.jianshu.io/admin_banners/web_images/4787/c4193ae08ae78a40e945d1e75ff84b4592147b13.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    </a>
                </div>
                {/* 首页内容 */}
                <MoreArt></MoreArt>
                <div className="loading"> <Icon type="sync" spin />  Loading</div>
            </Col>
        )
    }
     
}
var mapState = states=>{
    return{  
        // article:states.article 
    }
}

var mapAction = dispatch=>{
    return { 
        // queryArticle:()=>{
        //     dispatch(queryArticle())
        // }
    }
}

export default connect(mapState,mapAction)(LeftArt);