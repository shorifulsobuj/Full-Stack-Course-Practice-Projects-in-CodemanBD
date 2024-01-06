import React from "react";
import Typical from "react-typical";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cloz-icon">
              <a href="https://www.facebook.com/shorifulsobujofficial">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/shorifulsobujofficial/">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="https://www.youtube.com/@shorifulsobuj">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/ShorifulSobuj_">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm{" "}
              <span className="highlighted-text">Shoriful Sobuj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    // "Full Stack Web Developer",
                    // 1000,
                    // "PHP Developer",
                    // 1000,
                    // "Cyber ​​Security Specialist",
                    // 1000,
                    // "Freelancer",
                    // 1000,
                    "Ethussiastic Dev",
                    1000,
                    "Full Stack Web Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Cross-Platform v",
                    1000,
                    "React/React Native Dev",
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack on building applications with front-end and back-end
                Developer.
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="cv.pdf" download="Shoriul Sobuj resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
