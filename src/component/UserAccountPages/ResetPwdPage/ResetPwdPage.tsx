import React from "react";
import styles from "./ResetPwdPage.module.scss";
import AccountPageTemplate from "../AccountPageTemplate/AccountPageTemplate";
import visibilityIcon from '../../assets/visibilityIcon.svg';

export default function ResetPwdPage({ active }) {
  return (
    <AccountPageTemplate
      active={active}
      header="Reset password"
      footer="Back to Log in Page"
    >
      <div className={styles.ResetPwdPage}>
        <form>
          <div className={styles.password}>
            <input
              className={styles.input}
              type="text"
              id="resetPwd"
              name="resetPwd"
              placeholder="Password"
            ></input>

            <div className={styles.visibilityIcon}>
              <img src={visibilityIcon} alt="visibility"></img>
            </div>
          </div>

          <div className={styles.password}>
            <input
              className={styles.input}
              type="text"
              id="resetConfirmPwd"
              name="resetConfirmPwd"
              placeholder="Confirm Password"
            ></input>

            <div className={styles.visibilityIcon}>
              <img src={visibilityIcon} alt="visibility"></img>
            </div>
          </div>

          <input
            className={styles.buttons}
            type="submit"
            value="Reset Password"
          ></input>
        </form>
      </div>
    </AccountPageTemplate>
  );
}
