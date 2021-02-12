import React from "react";

import styles from "./ResetPwdSuccess.module.scss";

import sendIcon from '../../assets/send-icon.svg';
import AccountPageTemplate from "../AccountPageTemplate/AccountPageTemplate";

function ResetPwdSuccess({ active }) {
  return (
    <AccountPageTemplate active={active} header="" footer="">
      <div className={styles.container}>
        <div className={styles.sendIcon}>
          <img src={sendIcon}></img>
        </div>

        <div className={styles.pending}>Pending...</div>
        <div className={styles.bottom_container}>
          <div className={styles.content}>
            Please go to your inbox to active your account.
          </div>
        </div>
      </div>
    </AccountPageTemplate>
  );
}

export default ResetPwdSuccess;
