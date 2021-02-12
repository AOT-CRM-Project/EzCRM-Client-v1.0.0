import React from "react";
import AccountPageTemplate from "../AccountPageTemplate/AccountPageTemplate";
import styles from "./ForgetPwdPage.module.scss";
import emailIcon from '../../assets/emailIcon.svg';

export default function ForgetPwdPage({ active }) {
  return (
    <AccountPageTemplate active={active} header="Find your password" footer="">
      <div className={styles.ForgetPwdPage}>
        <form>
          <div className={styles.email}>
            <img className={styles.img} src={emailIcon}></img>
            <input
              className={styles.emailInput}
              type="text"
              id="forgetPwdPage-email"
              name="forgetPwdPage-email"
              placeholder="Please input your Email address"
            ></input>
          </div>

          <div className={styles.text}>
            <p>Sorry, we do not find an account with your Email.</p>
          </div>

          <input
            className={styles.buttons}
            type="submit"
            value="Reset Password"
          ></input>
          <input
            className={styles.smallButton1}
            type="submit"
            value="Log in"
          ></input>
          <input
            className={styles.smallButton2}
            type="submit"
            value="Sign up"
          ></input>
        </form>
      </div>
    </AccountPageTemplate>
  );
}
