import React, { Component } from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <p class="text">
        Made by Oscar Luu |{" "}
        <a href="https://oscarluu.me" className="text-footer">
          Personal Portfolio
        </a>{" "}
        |{" "}
        <a href="https://github.com/OscarLuu" className="text-footer">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com/in/OscarLuu" className="text-footer">
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default Footer;
