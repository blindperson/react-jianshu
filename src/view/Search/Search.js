import React ,{Component} from "react" 
import "./Search.css"
import {withRouter} from "react-router-dom"
// import { Button } from 'antd';  
import axios from "axios"
class Search extends Component{
    render(){
        return(
            <div className="main-root">
                 <h1>这里是搜索页面</h1>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.params.text)
        this.querySearch()
    }
    querySearch(){
        axios.post("/search/do",{
            q:this.props.match.params.text,
            type:"note",
            page:1,
            order_by:"default",
            header:{ 'Content-Type': 'application/json;charset=utf-8',
                    "X-CSRF-Token":"CPXIUlQB6uE/Y8TO4wC+Fqgy/o+Zm2g84LC/p20I+a1fPpGHefyLSSnmog7naj+WNoOsuGb3kQRzSI6pGKUddg=="}
        }).then(res => {  
            this.setState({
                nowList:res.data.slice(0,5)
            }) 
        });
        // console.log(XMLHttpRequest.status)
    }
}
export default withRouter(Search);