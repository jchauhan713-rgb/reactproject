import React, { Component } from "react";
import "./usercard.css";

class UserCard1 extends Component {
  render() {
    return (
      <>
        <div className="user-card">
          <img src="https://m.media-amazon.com/images/I/61qbMx4oXJL.jpg" alt="" />
          <button>Save</button>
          <h3>This is test</h3>
        </div>
      </>
    );
  }
}

export default UserCard1;
