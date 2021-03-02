import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer
        className="page-footer blue-grey"
        style={{
          borderRadius: "20px",
          textAlign: "center",
          fontFamily: "'Balsamiq Sans', cursive",
        }}
      >
        <div className="container">
          <div className="row">
            <h4 className="white-text">
              <a
                href="fb://facewebmodal/f?href=https://www.facebook.com/saurabh.sonde.52"
                style={{
                  paddingRight: "25px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="instagram://user?username=iamsaurabh.dev"
                style={{
                  paddingRight: "20px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/saurabhsonde"
                style={{
                  paddingRight: "10px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </h4>
            <div className="col l4 offset-l4 s12">
              <h5 className="grey-text text-lighten-4">
                Code with ❤ by Saurabh
              </h5>
              <h6>
                API Credits:-
                <a href="https://github.com/amodm/api-covid19-in">
                  Amod Malviya &{" "}
                </a>
                <a href="https://coronews.iamharsh.design/">iamharsh.dev</a>
              </h6>
              <h6>Data:-The Ministry of Health and Family Welfare</h6>
              <h6>
                Stay Home Stay Safe{" "}
                <span role="img" aria-label="mask">
                  😷
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="footer-copyright blue-grey">
          <div className="container"> © 2020 Saurabh Sonde</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
