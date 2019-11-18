import React,{Component} from "react"
import "./Logup.css"
import {withRouter} from "react-router-dom"
import { Button } from 'antd';  
class Logup extends Component{
    render(){
        return(
            <div className="sign_up">
                <div className="center">
                    <div className="input">
                        <label htmlFor="user">用&ensp;户&ensp;名：</label>
                        <input type="text" name="user" />
                    </div>
                    <div className="input">
                        <label htmlFor="password">密&emsp;&emsp;码：</label>
                        <input type="password" name="password" />
                    </div> 
                    <br/>
                    <div className="btnSub">
                        <Button type="primary">登陆</Button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Logup);