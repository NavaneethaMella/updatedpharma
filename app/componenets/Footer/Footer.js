/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';  // Importing the CSS Module

const Footer = () => {
  return (
   <footer className={styles.mainFooter}>
      <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/footer-bg2.png)' }}></div>
      <div className="auto-container">
        <div className="footer-top">
          <div className="top-inner">
            <figure className={styles.footerLogo}>
              <img src="img/logo.png" alt="Logo" />
            </figure>
            <ul className={styles.footerMenu}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.widgetSection}>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>About Us</h3>
                </div>
                <div className="widget-content">
                  <p>MBS Pharma LLC has over 30 years of experience offering compliance, regulatory affairs, and technical services.</p>
                  <ul className="info clearfix">
                    <li><a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a></li>
                    <li><a href="tel:1760-845-1576">+1-760-845-1576</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>Quick Link</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><a href="#">About Company</a></li>
                    <li><a href="#">Services</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>Resources</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="widget-content">
                  <p>To add complexity, this is happening against a backdrop of significant challenges</p>
                  <div className={styles.newsletterForm}>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <button type="submit">Get in Touch</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className="bottom-inner">
            <div className="copyright">
              <p>Copyright &copy; 2025 <a href="#">mbspharmas</a>, Inc. All Rights Reserved</p>
            </div>
            <ul className={styles.socialLinks}>
              <li><h4>Follow Us On</h4></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    /*return (
      <footer className={styles.mainFooter}>
        <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/footer-bg2.png)' }}></div>
        <div className="auto-container">
          <div className={styles.footerTop}>
            <figure className={styles.footerLogo}>
              <img src="img/logo.png" alt="Logo" />
            </figure>
            <ul className={styles.footerMenu}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.widgetSection}>
            <div className="row clearfix">
              {/* Remaining footer columns *//*}
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className="bottom-inner">
              <div className="copyright">
                <p>Copyright &copy; 2025 <a href="#">mbspharmas</a>, Inc. All Rights Reserved</p>
              </div>
              <ul className={styles.socialLinks}>
                <li><h4>Follow Us On</h4></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        </footer>*/
  /*);
}

export default Footer;

/*const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/footer-bg2.png)' }}></div>
      <div className="auto-container">
        <div className={styles.footerTop}>
          <figure className={styles.footerLogo}>
            <img src="img/logo.png" alt="Logo" />
          </figure>
          <ul className={styles.footerMenu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.widgetSection}>
          <div className="row clearfix">
            {/* Remaining footer columns *//*}
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className="bottom-inner">
            <div className="copyright">
              <p>Copyright &copy; 2025 <a href="#">mbspharmas</a>, Inc. All Rights Reserved</p>
            </div>
            <ul className={styles.socialLinks}>
              <li><h4>Follow Us On</h4></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer 
*/


/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';  // Importing the CSS Module

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/footer-bg2.png)' }}></div>
      <div className="auto-container">
        {/* Logo and Navigation Menu *//*}
        <div className={styles.footerTop}>
          <figure className={styles.footerLogo}>
            <img src="img/logo.png" alt="Logo" />
          </figure>
          <ul className={styles.footerMenu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        {/* About, Quick Links, Resources, Subscribe Newsletter *//*}
        <div className={styles.widgetSection}>
          <div className="row clearfix">
            <div className={styles.footerColumn}>
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>About Us</h3>
                </div>
                <div className="widget-content">
                  <p>MBS Pharma LLC has over 30 years of experience offering compliance, regulatory affairs, and technical services.</p>
                  <ul className="info clearfix">
                    <li><a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a></li>
                    <li><a href="tel:1760-845-1576">+1-760-845-1576</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>Quick Link</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><a href="#">About Company</a></li>
                    <li><a href="#">Services</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>Resources</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerWidget}>
                <div className={styles.widgetTitle}>
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="widget-content">
                  <p>To add complexity, this is happening against a backdrop of significant challenges</p>
                  <div className={styles.newsletterForm}>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <button type="submit">Get in Touch</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Copyright and Social Links *//*}
        <div className={styles.footerBottom}>
          <div className="bottom-inner">
            <div className={styles.copyright}>
              <p>Copyright &copy; 2025 <a href="#">mbspharmas</a>, Inc. All Rights Reserved</p>
            </div>
            <ul className={styles.socialLinks}>
              <li><h4>Follow Us On</h4></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
*/
import Image from 'next/image'; // for optimized image loading
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';  // Importing the CSS Module

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/footer-bg2.png)' }}></div>
      <div className="auto-container">
        {/* Logo and Navigation Menu */}
        <div className={styles.footerTop}>
          <figure className={styles.footerLogo}>
            <Image src="/img/logo.png" alt="Logo" width={200} height={100} />
          </figure>
          <ul className={styles.footerMenu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* About, Quick Links, Resources, Subscribe Newsletter */}
        <div className={styles.widgetSection}>
          <div className={styles.footerWidget}>
            <div className={styles.widgetTitle}>
              <h3>About Us</h3>
            </div>
            <div className="widget-content">
              <p>MBS Pharma LLC has over 30 years of experience offering compliance, regulatory affairs, and technical services.</p>
              <ul className="info clearfix">
                <li><a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a></li>
                <li><a href="tel:1760-845-1576">+1-760-845-1576</a></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerWidget}>
            <div className={styles.widgetTitle}>
              <h3>Quick Link</h3>
            </div>
            <div className="widget-content">
              <ul className="links-list clearfix">
                <li><a href="#">About Company</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerWidget}>
            <div className={styles.widgetTitle}>
              <h3>Resources</h3>
            </div>
            <div className="widget-content">
              <ul className="links-list clearfix">
                <li><a href="#">Events</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerWidget}>
            <div className={styles.widgetTitle}>
              <h3>Subscribe Newsletter</h3>
            </div>
            <div className="widget-content">
              <p>To add complexity, this is happening against a backdrop of significant challenges</p>
              <div className={styles.newsletterForm}>
                <form method="post" action="#">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email Address" required />
                    <button type="submit" className="theme-btn">Get in Touch</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Copyright and Social Links */}
        <div className={styles.footerBottom}>
          <div className="bottom-inner">
            <div className={styles.copyright}>
              <p>Copyright &copy; 2025 <a href="#">mbspharmas</a>, Inc. All Rights Reserved</p>
            </div>
            <ul className={styles.socialLinks}>
              <li><h4>Follow Us On</h4></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

                

            
          