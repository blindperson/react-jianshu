import  "./RightAut.css";
import React,{Component} from 'react'
import {  Col,Popover,Icon } from 'antd';  
import {newAuthor} from "../../store/action"
import { connect } from "react-redux";
import { Link} from "react-router-dom" 
const content = (
    <div className="RQCode">
        <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
    </div>
); 
class RightAut extends Component{
    constructor(props){
        super(props);
        this.state={
            // 点击换一批
            isRotate:false
        } 
    }
    render(){
        const formatNumber = num=>{
            if (num*1 > 1000) {
                num = num / 1000
                return  num.toFixed(1) + "k"
            } else {
                return num
            }
        }
        return( 
            <Col span={7} offset={1} className="aside">
                {/* 四张图片 */}
                <div className="board">
                    {/* <Link to="/mobile/club"  ><img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/></Link> */}
                    <a href="https://www.jianshu.com/mobile/club"  rel="noopener noreferrer"  target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/></a>
                    <a href="https://www.jianshu.com/mobile/books?category_id=284" rel="noopener noreferrer" target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/></a>
                    <Link to="/publications" ><img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/></Link>
                    <Link to="/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop"  ><img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt=""/></Link>
                </div>
                {/* 下载 */}
                <Popover content={content}  placement="top" className="download">
                    <Link to="/download">
                        <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                        <div className="info">
                            <div className="title">下载简书手机APP <Icon type="right" /></div>
                            <div className="description">随时随地发现和创作内容</div>
                        </div>
                    </Link>
                </Popover>
                {/* 推荐作者 */}
                <div className="recommended-authors"> 
                    <div className="title-change">
                        <span>推荐作者</span>
                        <div className="page-change" onClick={this.isRotateClick}> 
                            <Icon type="reload" className= {`${this.state.isRotate&&'isrotate'} `}/>
                            换一批
                        </div> 
                    </div>
                    {/* 五位作者 */}
                    <ul className="list">
                    {
                        this.props.author.map((data,i)=>{
                            return(
                                <li key={i} >
                                    <div className="authorMesssage">
                                        <div className="avatar">
                                            <img src={data.avatar_source} alt=""/>
                                        </div>
                                        <div>
                                            <p className="name">{data.nickname}</p>
                                            <p className="userNum">写了{formatNumber(data.total_wordage)}字 · {formatNumber(data.total_likes_count)}喜欢</p>
                                        </div>
                                    </div>
                                    <div className={`${!data.is_following_user} && attention`}>
                                        +关注
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>  
                <Link to="/recommendations/users?utm_source=desktop&utm_medium=index-users"  className="find-more">
                    查看全部<Icon type="right"></Icon>
                </Link>
            </Col> 
        )
    }
    componentDidMount(){ 
        // 右侧作者信息
        this.props.newAuthor();   
    } 
    isRotateClick = () =>{  
        this.setState({
            isRotate:true
        })
        // 右侧作者信息
        // this.newAuthor();
        setTimeout(()=>{
            this.setState({
                isRotate:false
            })
        },1000) 
    }
}

var mapState = states=>{
    return{ 
        author:states.author
    }
}

var mapAction = dispatch=>{
    return {
        newAuthor:()=>{
            dispatch(newAuthor())
        }
    }
}

export default connect(mapState,mapAction)(RightAut);