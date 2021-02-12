import React from "react";
import AccountPageTemplate from "../AccountPageTemplate/AccountPageTemplate";
import styles from "./LoginPage.module.scss";
import emailIcon from '../../assets/emailIcon.svg';
import passwordIcon from '../../assets/passwordIcon.svg';

export default function LoginPage({ active }) {
  return (
    
      <AccountPageTemplate
        active={active}
        header="Log in to your account"
        footer="Don't have an account?"
      >
        <div className={styles.loginPage}>
        <form>
          <div className={styles.password}>
            <img className={styles.Img} src={emailIcon}></img>
            <input
              className={styles.emailInput}
              type="text"
              id="loginPage-email"
              name="loginPage-email"
              placeholder="Email"
            ></input>
          </div>

          <div className={styles.password}>
            <img className={styles.Img} src={passwordIcon}></img>
            <input
              className={styles.passwordInput}
              type="text"
              id="logInPage-password"
              name="logInPage-password"
              placeholder="Password"
            ></input>
            <span className={styles.passwordSpan}>Forget?</span>
          </div>

          <p className={styles.text}>
            Invalid Email or Password. Please try again.
          </p>

          <input
            className={styles.buttons}
            type="submit"
            value="Log in"
          ></input>
        </form>
        </div>
      </AccountPageTemplate>
    
  );
}
