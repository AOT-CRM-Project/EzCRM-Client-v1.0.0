import React from "react";
import LogPagesProps from "../LogPagesProps/LogPagesProps";
import "./SignUpPage.scss";
import visibilityIcon from "../../img/visibilityIcon.svg";

export default function SignUpPage({ active }) {
  return (
    <LogPagesProps
      active={active}
      header="Let's Get Started!"
      footer="Already have an account?"
    >
      <div>
        <form>
          <input
            className="signUp-fname"
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
          ></input>
          <input
            className="signUp-lname"
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
          ></input>
          <input
            className="signUp-detail"
            type="text"
            id="signUp-email"
            name="signUp-email"
            placeholder="Email"
          ></input>

          <div className="signUp-password">
            <input
              className="signUp-detail"
              type="text"
              id="signUp-password"
              name="signUp-password"
              placeholder="Password"
            ></input>

            <div className="visibilityIcon">
              <img src={visibilityIcon} alt="visibility"></img>
            </div>
          </div>

          <div className="signUp-password">
            <input
              className="signUp-detail"
              type="text"
              id="signUp-confirmpassword"
              name="signUp-confirmpassword"
              placeholder="Confirm Password"
            ></input>

            <div className="visibilityIcon">
              <img src={visibilityIcon} alt="visibility"></img>
            </div>
          </div>

          <input
            className="signPage-buttons"
            type="submit"
            value="Create Account"
          ></input>
        </form>
      </div>
    </LogPagesProps>

  );
}
