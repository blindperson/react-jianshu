import  "./Home.css";
import React,{Component} from 'react'
import { Row, BackTop } from 'antd';    
import {connect} from "react-redux";
import { withRouter,Link } from 'react-router-dom';
import axios from "axios" 
// import LeftArt from "../../components/LeftArt/LeftArt"
import RightAut from "../../components/RightAut/RightAut" 
import { Col,Icon} from 'antd';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            newList:[],
        }
        this.LoadMore =this.LoadMore.bind(this)
    }
    render(){ 
        return (
            <div> 
                {/* 主体内容 */}
                <div className="main-root container">
                    <Row>
                        <Col span={16} className="main">
                            {/* 首页图 */}
                            <div className="carousel">
                                {/* eslint-disable-next-line */}
                                <a href="http://product.dangdang.com/28471013.html" target="_blank">
                                    <img src="//upload.jianshu.io/admin_banners/web_images/4787/c4193ae08ae78a40e945d1e75ff84b4592147b13.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                </a>
                            </div>
                            {/* 首页内容 */}
                            <div id="list-container">
                                <ul className="note-list"> 
                                {
                                    this.state.newList.map((m,i)=>{
                                    return(
                                        <li key={i} >
                                            <div className={`${m.object.data.list_image_url&&'picUrl'}`} >
                                                <img src={m.object.data.list_image_url} alt=""/>
                                            </div>
                                            <div className={`${m.object.data.list_image_url&&'has_img'}`}>
                                                {/* 标题 */}
                                                <Link className="titleName"  to={`/p/${m.object.data.slug}`} >
                                                    {m.object.data.title} 
                                                </Link>
                                                {/* 内容 */}
                                                <p>{m.object.data.public_abbr}</p>
                                                {/* 小信息 */}
                                                <div className="comment">
                                                    <div><Icon type="eye" />{m.object.data.total_fp_amount}</div>
                                                    <div>{m.object.data.user.nickname}</div>
                                                    {/* 点赞 */}
                                                    <div><Icon type="message" />{m.object.data.public_comments_count}</div>
                                                    {/* 评论 */}
                                                    <div><Icon type="heart" />{m.object.data.likes_count}</div>
                                                </div>
                                            </div>
                                        </li>
                                    )})
                                }
                                </ul>
                            </div>
                            <div className="loading"> <Icon type="sync" spin />  Loading</div>
                        </Col>
                        {/* <LeftArt></LeftArt> */}
                        <RightAut></RightAut>
                    </Row>
                    <BackTop /> 
                </div>
            </div>
        )
    }  
    componentDidMount(){  
        // 左侧最新文章
        this.queryArticle(); 
        window.addEventListener("scroll",this.LoadMore);
    } 
    componentWillUnmount(){
        window.removeEventListener("scroll",this.LoadMore);
    } 
    
    // 加载更多
    LoadMore(){ 
        var toTop = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
        if (toTop === 0 ) { 
            this.queryArticle();   
        } 
    }
    queryArticle(){
        axios({
            method:"get", 
            url:"/asimov/trending/now", 
            headers: { 'Content-Type': 'application/json;charset=utf-8'}
        }).then(res => { 
            this.setState({
                newList:this.state.newList.concat(res.data)
            }) 
        });
    }
}

var mapState = states=>{
    return{ 
         
    }
}

var mapAction = dispatch=>{
    return {
         
    }
}

export default connect(mapState,mapAction)(withRouter(Index));