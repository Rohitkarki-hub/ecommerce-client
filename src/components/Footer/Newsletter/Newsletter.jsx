import "./Newsletter.scss";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Suscribe</button>
        </div>
        <div className="text">
          Will be used in accordance witn our privacy policy
        </div>
        <div className="social-icons">
          <div className="icon">
            {" "}
            <FaFacebook size={14} />
          </div>
          <div className="icon">
            {" "}
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            {" "}
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            {" "}
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
