import React, { useState } from "react";

function UserPopup({ nameSubmit }) {
  const [name, SetName] = useState('');
  let isButtonDisabled=name.length===0

  return (
    <div className="userPop-wrapper">
      <div className="userPop">
        <div className="container">
            <p>Please enter your Full Name to <strong>Continue</strong></p>

          <div className="user-wrapper">
            <input
              className="form-control"
              type="text"
              placeholder="Your Name here"
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
            <button disabled={isButtonDisabled} className="btn btn-dark" onClick={() => nameSubmit(name)}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPopup;
