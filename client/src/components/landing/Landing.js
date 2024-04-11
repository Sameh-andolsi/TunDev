import React from "react";
import "./Landing.css";
import myLogo from "../../images/logo.png";
import { BsBriefcaseFill, BsFillPeopleFill } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { TfiVideoClapper } from "react-icons/tfi";
import { Link } from "react-router-dom";
import myGif from "../../images/landing-gif.gif";
import myGif2 from "../../images/landing-gif2.gif";
import myGif3 from "../../images/landing-gif3.gif";

function Landing() {
  return (
    <div className="landing">
      {/* navbar part */}
      <nav className="my-nav">
        <img src={myLogo} alt="logo" className="mylogo" />
        <div className="landing-icons">
          <div className="icon-part">
            <h5>
              <BsBriefcaseFill />
            </h5>
            <h6>Offers</h6>
          </div>
          <div className="icon-part">
            <h5>
              <BsFillPeopleFill />
            </h5>
            <h6>People</h6>
          </div>
          <div className="icon-part">
            <h5>
              <RiArticleLine />
            </h5>
            <h6>Articles</h6>
          </div>
          <div className="icon-part">
            <h5>
              <TfiVideoClapper />
            </h5>
            <h6>E-Learning</h6>
          </div>
        </div>
        <div className="buttonpart">
          <h5>
            <Link to="/login"> Sign In</Link>
          </h5>
          <h5 className="sign-up">
            <Link to="/register">Sign Up</Link>
          </h5>
        </div>
      </nav>
      {/* first content part */}
      <div className="landing-intro">
        <div>
          <h1>
            Welcome to the first <span> Tunisian</span>
          </h1>
          <h1>
            <span>Developers</span> Community.{" "}
          </h1>
        </div>
        <img src={myGif} alt="" />
      </div>
      {/* second part */}
      <div className="landing-dev">
        <h1>
          You are a <span>developer</span> ? Need a <span>Job </span>?
        </h1>
        <h1>
          You are a <span>Comapny</span> ? Searching for{" "}
          <span>Developers </span>?
        </h1>
        <img src={myGif2} alt="" />
        <h1 id="separation">
          Welcome to <span>TUNDEV</span>
        </h1>
        <h2>
          Where You can Land your <span>Dream Job</span>
        </h2>
        <h2>
          And Hire the Best <span>Tunisian Developers</span>
        </h2>
        <img src={myGif3} alt="" id="gif" />
      </div>
    </div>
  );
}

export default Landing;
