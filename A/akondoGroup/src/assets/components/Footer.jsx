import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Garments Business</p>
            </a>
            <a href="/employer">
              <p>Real Estate Business</p>
            </a>
            <a href="/healthplan">
              <p>Auto Mobiles</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Partners</h4>
            <a href="#">
              <p>Swing Tech</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <div className="sb_footer-links-div-h4">
              <h4>Coming soon on</h4>
            </div>
            <div className="socialmedia">
              <p>
                <img src={facebook} alt="facebook icon" />
              </p>
              <p>
                <img src={twitter} alt="twitter icon" />
              </p>
              <p>
                <img src={linkedin} alt="linkedin icon" />
              </p>
              <p>
                <img src={instagram} alt="instagram icon" />
              </p>
              <p>
                <img src={youtube} alt="youtube icon" />
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              © {new Date().getFullYear()} Akondo Group | All right reserved.
              Designed & Developed By <a href="#">Shoriful Sobuj</a>
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
