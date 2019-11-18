import React,{Component} from "react"
import "./Login.css"
import {withRouter} from "react-router-dom"
import { Button } from 'antd';  
class Login extends Component{
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
                    <div className="input">
                        <label htmlFor="repassword">确认密码：</label>
                        <input type="password"/>
                    </div>
                    <br/>
                    <div className="btnSub">
                        <Button type="primary" onClick={this.onClick}>注册</Button>
                    </div>
                </div> 
            </div>
        )
    } 
}
export default withRouter(Login);