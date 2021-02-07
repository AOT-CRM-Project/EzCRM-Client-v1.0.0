import React from "react";
import "./ResetPwdPage.css";
import LogPagesProps from "../LogPagesProps/LogPagesProps";

export default function ResetPwdPage({ active }) {
  return (
    <LogPagesProps
      active={active}
      header="Reset password"
      footer="Back to Log in Page"
    >
      <div>
        <form>
          <input
            className="signUp-detail"
            type="text"
            id="resetPwd"
            name="resetPwd"
            placeholder="Password"
          ></input>
          <input
            className="signUp-detail"
            type="text"
            id="resetConfirmPwd"
            name="resetConfirmPwd"
            placeholder="Confirm Password"
          ></input>

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
