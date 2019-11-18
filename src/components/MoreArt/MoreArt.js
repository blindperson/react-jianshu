
import  "./MoreArt.css";
import React,{Component} from 'react'
import { Icon} from 'antd'; 
import { Link} from "react-router-dom"  
import {connect} from "react-redux"; 
import {queryArticle} from "../../store/action"
class MoreArt extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.LoadMore =this.LoadMore.bind(this)
    }
    render(){
        return(
            <div id="list-container">
                <ul className="note-list"> 
                {
                    this.props.article.map((m,i)=>{
                    return(
                        <li key={i} >
                            <div className={`${m.object.data.list_image_url&&'picUrl'}`} >
                                <img src={m.object.data.list_image_url} alt=""/>
                            </div>
                            <div className={`${m.object.data.list_image_url&&'has_img'}`}>
                                {/* 标题 */}
                                <Link className="titleName"  to={`/p/${m.object.data.slug}`} onClick={this.changeNum} >
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
            
        )
    }
    componentDidMount(){  
        // 左侧最新文章
        this.props.queryArticle(); 
        window.addEventListener("scroll",this.LoadMore);
    } 
    componentWillUnmount(){
        window.removeEventListener("scroll",this.LoadMore);
    } 
    changeNum=()=>{
        setTimeout(()=>{
            window.location.reload()
        },0)
    }
    // 加载更多
    LoadMore(){ 
        var toTop = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
        if (toTop === 0 ) { 
            this.props.queryArticle();  
            console.log(this.props.article)
        } 
    }
}
var mapState = states=>{
    return{  
        article:states.article 
    }
}

var mapAction = dispatch=>{
    return { 
        queryArticle:()=>{
            dispatch(queryArticle())
        }
    }
}

export default connect(mapState,mapAction)(MoreArt);