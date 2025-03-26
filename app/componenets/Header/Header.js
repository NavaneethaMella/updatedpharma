// app/components/Header.js
/*import Header from './componenets/Header/Header';
import SearchPopup from './componenets/SearchPopup';<SearchPopup />
//import Home from './componenets/Home'<Home/>
import Footer from './componenets/Footer/Footer'
import Banner from './componenets/Banner/Banner'
import Client from './componenets/ClientSection/Client'
import About from './componenets/About/About'
import ScrollToTop from './componenets/Scrolltotop/ScrollToTop';
import SpecialitySection from './componenets/SpecialitySection/SpecialitySection'
 <Header />
      <Banner/>
      <Client/>
      <About/>
      <SpecialitySection/>
      <Footer/>
      <ScrollToTop/>;*/
/*import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Initialize any necessary JavaScript libraries here if needed
  }, []);

  return (
    <div className="boxed_wrapper ltr">
      {/* Search Popup *//*}
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <a href="#">
                <img src="/assets/img/logo.png" alt="" />
              </a>
            </figure>
            <div className="close-search pull-right">
              <span className="far fa-times"></span>
            </div>
          </div>
          <div className="overlay-layer"></div>
          <div className="auto-container">
            <div className="search-form">
              <form method="post" action="#">
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      value=""
                      placeholder="Type your keyword and hit"
                      required
                    />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header *//*}
      <header className="main-header header-style-two">
        {/* Header Lower *//*}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#">
                    <img src="/assets/img/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li className="current dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li>
                            <a href="#">Page 1</a>
                          </li>
                          <li>
                            <a href="#">Page 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header *//*}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#">
                    <img src="/assets/img/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix"></nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu *//*}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="#">
              <img src="/assets/img/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>MBS Pharma, USA</li>
              <li>
                <a href="tel:+8801682648101">+1-760-845-1576</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@mbapharmas.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-pinterest-p"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
*/

/*import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className="main-header">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#"><img src="/assets/img/logo.png" alt="MBS Pharmas" className={styles.logo} /></a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation clearfix">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li className="current dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li><a href="#">Page 1</a></li>
                          <li><a href="#">Page 2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
*/
/*'use client';

import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className="main-header">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#">
                    <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation clearfix">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li className="current dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li><a href="#">Page 1</a></li>
                          <li><a href="#">Page 2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
*/
/*'use client';

import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className="main-header">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#">
                    <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation clearfix">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li className="current dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li><a href="#">Page 1</a></li>
                          <li><a href="#">Page 2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}*/
'use client';

import Image from 'next/image';
import styles from './Header.module.css';  // Import the CSS module

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        {/* Logo Section */}
        <div className={styles.logoBox}>
          <a href="/">
            <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
          </a>
        </div>

        {/* Main Menu Section */}
        <nav className={styles.menuArea}>
          <ul className={styles.navigation}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className={styles.dropdown}>
              <a href="#">Services</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
              </ul>
            </li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

