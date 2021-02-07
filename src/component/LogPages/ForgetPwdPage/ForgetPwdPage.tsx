import React from "react";
import LogPagesProps from "../LogPagesProps/LogPagesProps";
import "./ForgetPwdPage.css";

export default function ForgetPwdPage({ active }) {
  return (
    <LogPagesProps active={active} header="Find your password" footer="">
      <div className="forgetPwdPage-input">
        <p>Please input your Email address</p>
      </div>
      <div className="forgetPwdPage-text">
          <p>Sorry, we do not find an account with your Email.</p>
      </div>
      <input
            className="signPage-buttons"
            type="submit"
            value="Reset Password"
          ></input>
          <input
            className="signPage-smallButton1"
            type="submit"
            value="Log in"
          ></input>
          <input
            className="signPage-smallButton2"
            type="submit"
            value="Sign up"
          ></input>
    </LogPagesProps>
  );
}
