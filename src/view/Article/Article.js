import React,{Component} from "react";
import './Article.css'
import { withRouter,Link } from 'react-router-dom';
import axios from "axios"
import { Row, Col, Affix,BackTop } from 'antd'; 
import MoreArt from "../../components/MoreArt/MoreArt"
// const  that = this
class Article extends Component{
    constructor(props){
        super(props);
        this.state={
            // 文章信息
            everyList:"", 
            // 作者
            user:"",
            // 作者id
            userId:"",
            // 作者文章
            artList:[],
            // 热门推荐
            nowList:[],
            // host:""
        };
         
    }
    render(){
        const formatTime = date => { 
            const dt = new Date(date);
            const y = dt.getFullYear();
            const m = (dt.getMonth()+1).toString().padStart(2,0)
            const d = dt.getDate().toString().padStart(2,0) 
            const hh = dt.getHours().toString().padStart(2,0)
            const mm = dt.getMinutes().toString().padStart(2,0)
            const ss = dt.getSeconds().toString().padStart(2,0)
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;  
        }
        return(
            <div className="article-root">
                {/* 遮罩层 */}
                <div className="mask"></div>
                {/* 主体 */}
                <div className=" secondContainer mainBody">
                    <Row >
                        <Col span={16} className="main ">
                            <div className="secondContent white">
                                <h1 className="secondTitle">{this.state.everyList.public_title}</h1>
                                <div className="secondAuthor"> 
                                    <div className="secondAvatar">
                                        <img src={this.state.user.avatar} alt=""/>
                                    </div>
                                    <div className="secondAuthorMessage">
                                        <div>
                                            <span>{this.state.user.nickname}</span>
                                            <span className="isConcern">关注</span>
                                        </div>
                                        <div className="jutiNum">
                                            <span>{formatTime(this.state.everyList.first_shared_at)}</span>
                                            <span>字数:{this.state.everyList.wordage}</span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="detailImgWrap" dangerouslySetInnerHTML={{ __html:this.state.everyList.free_content}}></div>
                            </div>
                            <div className="marginTop white">
                                <h3 className="recommendArt">推荐阅读</h3>
                                <MoreArt></MoreArt>
                            </div>
                        </Col>
                        <Col span={7} offset={1} className="asideSecond"> 
                                    {/* 广告 */}
                                    <section style={{width:100+"%", height: 173+"px"}}>
                                        <div className="guanggao"></div>
                                    </section>
                                    {/* 作者信息 */}
                                    <section  className="recommand">
                                        <div className="msgArt">
                                            <div className="secondAvatar">
                                                <img src={this.state.user.avatar} alt=""/>
                                            </div>
                                            <span className="nickname">{this.state.user.nickname}</span>
                                            <div>
                                                <span className="isConcern">关注</span>
                                            </div>
                                        </div>
                                        <div className="setPadding "> 
                                            {
                                                this.state.artList.map((m,i)=>{
                                                    return(
                                                        <div key={i}  className="setPadding">
                                                            <Link to={`/p/${m.object.data.slug}`} onClick={this.changeNum} >
                                                                <h4>{m.object.data.title}</h4> 
                                                            </Link>
                                                            <p className="readNum" >阅读量：{m.object.data.views_count}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </section>
                                <Affix offsetTop={80}>
                                    {/* 推荐阅读 */}
                                    <section className="recommand">
                                        <h3 className="recommendArt">推荐阅读</h3>
                                        <div className="setPadding">
                                            {
                                                this.state.nowList.map((m,i)=>{
                                                    return(
                                                        <div key={i}  className="setPadding"> 
                                                            <Link to={`/p/${m.object.data.slug}`} onClick={this.changeNum}>
                                                                <h4>{m.object.data.title}</h4> 
                                                            </Link> 
                                                            <p className="readNum" >阅读量：{m.object.data.total_fp_amount}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </section>
                                    {/* 广告 */}
                                    <section style={{width: 100+"%", height: 173+"px"}}>
                                        <div className="guanggao"></div>
                                    </section> 
                                </Affix>
                        </Col>
                    </Row>
                    {/* 回到顶部 */}
                    <BackTop /> 
                </div>
            </div>
        )
    }
    changeNum=()=>{
        setTimeout(()=>{
            window.location.reload()
        },0)
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        this.queryAtricle();   
    } 
    // componentDidUpdate(){
    //     this.setState({
    //         host:this.props.match.params.id
    //     })
    // }
    // 获取该文章
    queryAtricle(){ 
        axios({
            method:"get", 
            url:"/asimov/p/"+this.props.match.params.id,
        }).then((res) => {   
            console.log(res.data)  
            this.setState({
                everyList:res.data,
                user:res.data.user,
                userId:res.data.user.slug
            })         
            this.queryAuthorAtr();
            this.queryNow(); 
        });
    }
    // 获取作者写的文章
    queryAuthorAtr(){ 
        axios({
            method:"get",  
            url:"/asimov/users/slug/"+this.state.userId+"/public_notes",
        }).then((res) => {   
            this.setState({ 
                artList:res.data.slice(0,4)
            })         
            // console.log(this.state.artList) 
        }); 
    }
    // 获取最新推荐
    queryNow(){ 
        axios({
            method:"get", 
             url:"/asimov/trending/now"
        }).then(res => {  
            this.setState({
                nowList:res.data.slice(0,5)
            }) 
        });
    }

}
export default withRouter(Article);