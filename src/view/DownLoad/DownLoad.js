import React ,{Component} from "react" 
import "./DownLoad.css"
import {withRouter} from "react-router-dom"  
class DownLoad extends Component{
    render(){
        return(
            <div className="down-root"> 
                 <div className="container-fluid">
                    <div className="row row1">
                        <div className="top-part">
                            <div className="top-logo">
                                <img src="//cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png"  alt=""/>
                                <div className="info">
                                    <div className="title">创作你的创作</div>
                                    <div className="slogan">一个优质创作社区</div>
                                </div>
                            </div>
                            <img src="//cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png" className="background-img" alt=""/>
                            <img src="//cdn2.jianshu.io/assets/web/misc-phone-7dfef21cef3585139d67481fbeb3a488.png"  className="phone-img" alt=""/>
                            <div className="top-qrcode">
                                <img src="//cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png" alt=""/>
                                <div className="title">扫码下载简书App</div>
                                <div className="description">随时随地发现和创作内容</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="middle-part bcimg">
                            <div className="text-block text-pos">
                                <h3>轻松创作精美图文</h3>
                                <h6>简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</h6>
                            </div>
                            {/* <div className="text-img">
                                <img src="//cdn2.jianshu.io/assets/web/misc-pic1-b2e2caa2aec8ff89bd6957f09b4e6fce.png" alt=""/>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="middle-part">
                            <div className="col-xs-11">
                                <img src="//cdn2.jianshu.io/assets/web/misc-pic2-378196f0f0c87fee66210c957722605c.png" alt=""/>
                            </div>
                            <div className="text-block">
                                <h3>多元化的创作社区</h3>
                                <h6>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="middle-part">
                            <div className="text-block">
                                <h3>百万创作者在简书相遇</h3>
                                <h6>在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</h6>
                            </div>
                            <div className="col-xs-11">
                                <img src="//cdn2.jianshu.io/assets/web/misc-pic3-a3e7f05fee99976afbb936eb6d3c288a.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="middle-part">
                            <div className="col-xs-11">
                                <img src="//cdn2.jianshu.io/assets/web/misc-pic4-ed9583c5975a6d953f47c09ed63b911b.png" alt=""/>
                            </div>
                            <div className="text-block">
                                <h3>自由地交流和沟通</h3>
                                <h6>你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="bottom-part">
                            <img className="bottom-qrcode" src="//cdn2.jianshu.io/assets/web/download-apps-page-bottom-qrcode-8c63808111ffb1746c08cbd262adbe2e.png" alt=""/>
                            <img className="background-img" src="//cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png" alt=""/>
                            <div>扫码下载简书APP</div>
                            <div className="bottom-logo">
                                <img src="//cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png" alt=""/>
                                <div className="info">
                                    <div className="title">创作你的创作</div>
                                    <div className="slogan">一个优质创作社区</div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
    componentDidMount(){
         
    }
     
}
export default withRouter(DownLoad);