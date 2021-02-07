import React from "react";
import "./ResetPwdPage.css";
import LogPagesProps from "../LogPagesProps/LogPagesProps";
import visibilityIcon from "../../img/visibilityIcon.svg";

export default function ResetPwdPage({ active }) {
  return (
    <LogPagesProps
      active={active}
      header="Reset password"
      footer="Back to Log in Page"
    >
      <div>
        <form>
          <div className="signUp-password">
            <input
              className="signUp-detail"
              type="text"
              id="resetPwd"
              name="resetPwd"
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
              id="resetConfirmPwd"
              name="resetConfirmPwd"
              placeholder="Confirm Password"
            ></input>

            <div className="visibilityIcon">
              <img src={visibilityIcon} alt="visibility"></img>
            </div>
          </div>

          <input
            className="signPage-buttons"
            type="submit"
            value="Reset Password"
          ></input>
        </form>
      </div>
    </LogPagesProps>
  );
}
