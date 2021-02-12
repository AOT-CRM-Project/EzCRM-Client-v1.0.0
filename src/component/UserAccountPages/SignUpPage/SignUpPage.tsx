import React from "react";
import AccountPageTemplate from "../AccountPageTemplate/AccountPageTemplate";
import styles from "./SignUpPage.module.scss";
import visibilityIcon from "../../assets/visibilityIcon.svg";

export default function SignUpPage({ active }) {
  return (
    <AccountPageTemplate
      active={active}
      header="Let's Get Started!"
      footer="Already have an account?"
    >
      <div className={styles.signUpPage}>
        <form>
          <input
            className={styles.fName}
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
          ></input>
          <input
            className={styles.lName}
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
          ></input>
          <input
            className={styles.input}
            type="text"
            id="signUp-email"
            name="signUp-email"
            placeholder="Email"
          ></input>

          <div className={styles.password}>
            <input
              className={styles.input}
              type="text"
              id="signUp-password"
              name="signUp-password"
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
              id="signUp-confirmpassword"
              name="signUp-confirmpassword"
              placeholder="Confirm Password"
            ></input>

            <div className={styles.visibilityIcon}>
              <img src={visibilityIcon} alt="visibility"></img>
            </div>
          </div>

          <input
            className={styles.buttons}
            type="submit"
            value="Create Account"
          ></input>
        </form>
      </div>
    </AccountPageTemplate>
  );
}
