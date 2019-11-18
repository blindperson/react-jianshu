import React,{Component} from "react"
import "./Publications.css" 
import { Col,Row,Icon } from 'antd';
import { withRouter,Link } from 'react-router-dom';  
import axios from "axios"
class Publications extends Component{
    constructor(props){
        super(props);
        this.state = {
            // 换一批
            num:1,
            // 推荐作者
            recomList:[]
        }
    }
    render(){
        return(
            <div className="pub-root">
                {/* 头条颜色 */}
                <div className="banner-background"></div>
                {/* 头条文字 */}
                <div className="publications">
                    <div className="banner">
                        <Link to="/publications"> 
                            <img className="logo" src="//cdn2.jianshu.io/assets/publications/logo-ecec2468a1633a0bea170433976d5fc0.png" alt=""/>
                        </Link>
                        <div className="title">
                            <Link to="/publications"> 
                                <img className="logo-font " src="//cdn2.jianshu.io/assets/publications/logo-font-b03104f62f6ba77b57db2877e859b35d.png" alt=""/>
                            </Link>
                            <span className="slogan">· 独立作者平台</span>
                        </div>
                        <Link className="help" to="/p/fc1c113e5b6b"><Icon type="question-circle" />  如何出一本属于你自己的书</Link>
                    </div>
                    <Row>
                        <Col  span={4} className="aside">
                            <div className="category">
                                <div className="title">分类导航</div>
                                <div className="navigation">
                                    <a href="#novel">小说、故事</a>
                                    <a href="#it">互联网、科普</a>
                                    <a href="#career">职场、励志、理财</a>
                                    <a href="#culture">文化、历史</a>
                                    <a href="#skill">工具、技能</a>
                                    <a href="#collection">电子书</a>
                                </div>
                            </div>
                            <div className="category">
                                <div className="title">我想出书</div>
                                <div className="question">
                                    <div className="sub-title">什么是简书版权？</div>
                                    <div className="intros">借助「简书版权」出一本你自己的书</div>
                                    <Link to="/p/9ec112fa94b8">查看详情<Icon type="right" /></Link>
                                </div>
                                <div className="question">
                                    <div className="sub-title">如何投稿？</div>
                                    <div className="intros">投稿要求及方式</div>
                                    <Link to="/p/fc1c113e5b6b">查看详情<Icon type="right" /></Link>
                                </div>
                            </div>
                            <div className="category">
                                <div className="title">关注我们</div>
                                <div className="social weibo">
                                    <a href="https://www.weibo.com/jianshudzs" target="_blank" rel="noopener noreferrer">
                                        <Icon type="weibo-circle" theme="filled" />
                                        <div className="content">
                                            <div className="sub-title">@简书出版</div>
                                            <div className="intros">官方微博</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="social jianshu">
                                    <Link to="/u/55b597320c4e">
                                        <img className="jianshu-logo" src="//cdn2.jianshu.io/assets/publications/logo-aside-c85e40b4231f925af29d8c05146656e5.png" alt=""/>
                                        <div className="content">
                                            <div className="sub-title">简书出版</div>
                                            <div className="intros">简书官方账号</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="category">
                                <div className="title">
                                    版权合作
                                    <Icon type="info-circle" theme="filled" />
                                </div>
                                <div className="contact">
                                    图书出版、影视改编、版权采购等机构方合作，请邮件联系：
                                    <a href="mailto:pub@jianshu.com">pub@jianshu.com</a>
                                </div>
                            </div>
                            <div className="category">
                                <div className="title">设计规范</div>
                                <div className="question">
                                    <div className="sub-title">对出版图书的设计建议</div>
                                    <Link to="/publications/guidelines">
                                        查看详情
                                        <Icon type="right"></Icon>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col span={18} offset={2}>
                            <div className="recommended-users">
                                <div className="title">
                                    推荐作者
                                    <div className="page-change" onClick={this.changeNum}>
                                        <Icon type="sync" />换一批
                                    </div>
                                </div> 
                                <div className="flexBox"> 
                                    {
                                        this.state.recomList.map((m,i)=>{
                                            return(
                                                <div className="user" key={i}>
                                                    <img className="avatar" src={m.user.avatar_source} alt=""/>        
                                                    <div className="user-info">
                                                        <div className="name">{m.user.nickname}</div>
                                                        <div className="intros">{m.user.intro}</div>
                                                        <a  className="text" href={m.key_work_url} target="_blank"  rel="noopener noreferrer">{m.key_work_title}</a>
                                                        <a className="latest-article" href={m.user.notes[0].note_url}  target="_blank"  rel="noopener noreferrer"><Icon type="container" theme="filled" /> {m.user.notes[0].public_title}</a>
                                                        <a className="latest-article" href={m.user.notes[1].note_url}  target="_blank"  rel="noopener noreferrer"><Icon type="container" theme="filled" />  {m.user.notes[1].public_title}</a>
                                                        <div className="link">去作者主页 <Icon type="right"></Icon></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        
                                    }
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    componentWillMount(){
        this.queryCom();
    }
    changeNum=()=>{
        this.setState({
            num:Math.floor(Math.random()*5+1)
        })
        this.queryCom();
    }
    queryCom(){
        axios({ 
            method:"get", 
            url:"/publication_recommended_users",
            params:{ 
                page:this.state.num,
                count:4 
            },
            headers: { 'Accept': 'application/json',"If-None-Match":"W/\"f43c63eb8a15a59d9314c91e5baef8ac\"","referer":"https://www.jianshu.com/"}
        }).then((res) => {    
             this.setState({
                recomList:res.data
             })
             console.log(this.state.recomList)
        });
    }
}
export default withRouter(Publications);