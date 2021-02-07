import React from "react";
import LogPagesProps from "../LogPagesProps/LogPagesProps";
import "./SignUpPage.css";

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
            id="fname"
            name="fname"
            placeholder="Email"
          ></input>
          <input
            className="signUp-detail"
            type="text"
            id="fname"
            name="fname"
            placeholder="Password"
          ></input>
          <input
            className="signUp-detail"
            type="text"
            id="fname"
            name="fname"
            placeholder="Confirm Password"
          ></input>
          <input
            className="signPage-buttons"
            type="submit"
            value="Create Account"
          ></input>
        </form>
      </div>
    
    </LogPagesProps>

    // <div className="signUp-page">

    //   <h1 className="pageHeader">Let's Get Started!</h1>

    //   <div>
    //     <form>
    //       <input
    //         className="signUp-fname"
    //         type="text"
    //         id="fname"
    //         name="fname"
    //         placeholder="First Name"
    //       ></input>
    //       <input
    //         className="signUp-lname"
    //         type="text"
    //         id="lname"
    //         name="lname"
    //         placeholder="Last Name"
    //       ></input>
    //       <input
    //         className="signUp-detail"
    //         type="text"
    //         id="fname"
    //         name="fname"
    //         placeholder="Email"
    //       ></input>
    //       <input
    //         className="signUp-detail"
    //         type="text"
    //         id="fname"
    //         name="fname"
    //         placeholder="Password"
    //       ></input>
    //       <input
    //         className="signUp-detail"
    //         type="text"
    //         id="fname"
    //         name="fname"
    //         placeholder="Confirm Password"
    //       ></input>
    //       <input
    //         className="signUp-button"
    //         type="submit"
    //         value="Create Account"
    //       ></input>
    //     </form>

    //   </div>

    //   <div className="signUp-footer">
    //     <h3>Already have an account?</h3>
    //   </div>
    // </div>
  );
}
