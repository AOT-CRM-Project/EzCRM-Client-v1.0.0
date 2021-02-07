import React from 'react';
import emailIcon from '../../img/emailIcon';
import LogPagesProps from '../LogPagesProps/LogPagesProps';
import './LoginPage.css';


export default function LoginPage ({active}) {
    return(
        <LogPagesProps active={active} header="Log in to your account" footer="Don't have an account?">
                
            <div className="logInPage">
                <div className="logInPage-email">
                    <emailIcon />
                    <p>Email</p>
                </div>

                <div className="logInPage-password">
                    {/* <img src={require("../../img/passwordIcon.svg")}></img> */}
                    <p>Password</p>
                </div>

            </div>

        </LogPagesProps>
    );
}