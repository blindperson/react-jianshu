import React ,{Component} from "react" 
import "./Write.css"
import {withRouter} from "react-router-dom"  
class Write extends Component{
    render(){
        return(
            <div className="main-root">
                 <h1>这里是写文章页面</h1>
            </div>
        )
    }
    componentDidMount(){
         
    }
     
}
export default withRouter(Write);