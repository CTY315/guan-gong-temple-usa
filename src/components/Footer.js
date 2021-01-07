import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div style={{ padding: "20px 5% 20px 5%" }}>
        <p>Copyright &copy;{new Date().getFullYear()} | Guang Gong Temple</p>
      </div>
    );
  }
}

export default AboutUs;
