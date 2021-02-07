import React from "react";
import LogPagesProps from "../LogPagesProps/LogPagesProps";
import "./LoginPage.css";
import emailIcon from "../../img/emailIcon.svg";
import passwordIcon from "../../img/passwordIcon.svg";

export default function LoginPage({ active }) {
  return (
    <LogPagesProps
      active={active}
      header="Log in to your account"
      footer="Don't have an account?"
    >
      <div>
        <form>
          <div className="forgetPwdPage-input">
            <img src={emailIcon}></img>
            <input
              type="text"
              id="loginPage-email"
              name="loginPage-email"
              placeholder="Email"
            ></input>
          </div>

          <div className="loginPage-password">
            <img src={passwordIcon}></img>
            <input
              type="text"
              id="logInPage-password"
              name="logInPage-password"
              placeholder="Password"
            ></input>
            <span>Forget?</span>
          </div>

          <p className="loginPage-text">Invalid Email or Password. Please try again.</p>

          <input
            className="signPage-buttons"
            type="submit"
            value="Log in"
          ></input>
        </form>
      </div>
    </LogPagesProps>
  );
}
