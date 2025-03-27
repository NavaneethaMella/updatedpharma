// pages/about.js
import Head from "next/head";
import Script from "next/script";

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>About Us - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/about.css" rel="stylesheet" />
      <section className="about-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Who We Are</span>
            <h2>About MBS Pharma</h2>
          </div>

          <div className="about-content">
            <p>
              MBS Pharma is a leading pharmaceutical consulting company with over
              30 years of experience. Our expertise spans regulatory affairs, compliance,
              and technical services that help pharmaceutical companies navigate complex
              FDA regulations and ensure product success.
            </p>
            <p>
              We are committed to providing our clients with actionable, scientific, and
              technical recommendations to ensure compliance with FDA guidelines, drive
              innovation, and enable the successful approval of pharmaceutical products.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide world-class consulting services that enable
              pharmaceutical companies to efficiently and effectively bring their products
              to market while maintaining the highest levels of compliance, quality, and
              patient safety.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>Integrity: We prioritize transparency and honesty in all our dealings.</li>
              <li>Excellence: We strive for excellence in every project we undertake.</li>
              <li>Innovation: We encourage innovative approaches to overcome challenges.</li>
              <li>Collaboration: We believe in working closely with our clients to achieve shared success.</li>
            </ul>
            <h3>Our Leadership Team</h3>
            <div className="team-section">
              <div className="team-member">
                <img src="/img/team-member-1.jpg" alt="Team Member 1" />
                <h4>Michael Smith</h4>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <img src="/img/team-member-2.jpg" alt="Team Member 2" />
                <h4>Jane Doe</h4>
                <p>Chief Operating Officer</p>
              </div>
              <div className="team-member">
                <img src="/img/team-member-3.jpg" alt="Team Member 3" />
                <h4>John Williams</h4>
                <p>VP of Regulatory Affairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Scripts */}
      <Script src="/js/jquery.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/owl.js" />
      <Script src="/js/wow.js" />
      <Script src="/js/validation.js" />
      <Script src="/js/jquery.fancybox.js" />
      <Script src="/js/appear.js" />
      <Script src="/js/isotope.js" />
      <Script src="/js/parallax-scroll.js" />
      <Script src="/js/jquery.nice-select.min.js" />
      <Script src="/js/jQuery.style.switcher.min.js" />
      <Script src="/js/language.js" />
      <Script src="/js/scrolltop.min.js" />
      <Script src="/js/gsap.js" />
      <Script src="/js/ScrollTrigger.js" />
      <Script src="/js/SplitText.js" />
      <Script src="/js/odometer.js" />
      <Script src="/js/script.js" />
    </>
  );
};

export default AboutPage;*/



import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// MainHeader1 and Footer will be imported assuming you have these as separate components.
import MainHeader1 from '../components/MainHeader1';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="boxed_wrapper ltr">
      {/* Main Header Component */}
      <MainHeader1 />

      {/* Main Content Section */}
      <main className="main-content alternat-2">
        {/* Page Title */}
        <section className="page-title centred">
          <div
            className="bg-layer"
            style={{ backgroundImage: 'url(assets/img/parx3.png)' }}
          ></div>
          <div
            className="pattern-layer"
            style={{ backgroundImage: 'url(assets/img/shape/shape-18.png)' }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h2>About Us</h2>
              <ul className="bread-crumb">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>-</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Error Section / About Us Content */}
        <section className="error-section centred">
          <div className="auto-container">
            <div className="content-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/icons/error-1.png"
                  alt="Error Image"
                  width={500} // Adjust width and height as necessary
                  height={500}
                />
              </figure>
              <h1>About Us</h1>
              <h2>Text</h2>
              <div className="btn-box">
                <Link href="#">
                  <a className="theme-btn btn-one mr_20">
                    Go Back
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </Link>
                <Link href="#">
                  <a className="theme-btn btn-one">
                    Back to Home
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutUs; 

//ABOUTUS PAGE //
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MainHeader1 from '../components/MainHeader1'; // Assuming you have this component
import Footer from '../components/Footer'; // Assuming you have this component

const ContactUs = () => {
  return (
    <div className="boxed_wrapper ltr">
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Contact Us</title>
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Main Header Component */}
      <MainHeader1 />

      {/* Main Content Section */}
      <main className="main-content alternat-2">
        {/* Page Title */}
        <section className="page-title centred">
          <div
            className="bg-layer"
            style={{ backgroundImage: 'url(/assets/images/background/page-title-5.jpg)' }}
          ></div>
          <div
            className="pattern-layer"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-53.png)' }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h2>Contact Us</h2>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>-</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section pt_120 pb_90 centred">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                <div className="info-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="r-hex">
                        <div className="r-hex-inner"></div>
                      </div>
                      <div className="icon">
                        <i className="icon-67"></i>
                      </div>
                    </div>
                    <h3>Our Location</h3>
                    <p>
                      MBS Pharma LLC , <br /> 11111
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                <div className="info-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="r-hex">
                        <div className="r-hex-inner"></div>
                      </div>
                      <div className="icon">
                        <i className="icon-68"></i>
                      </div>
                    </div>
                    <h3>Email Address</h3>
                    <p>
                      <a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                <div className="info-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="r-hex">
                        <div className="r-hex-inner"></div>
                      </div>
                      <div className="icon">
                        <i className="icon-69"></i>
                      </div>
                    </div>
                    <h3>Phone Number</h3>
                    <p>
                      Emergency Cases <br />
                      <a href="tel:1760-845-1576">+1-760-845-1576</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="google-map-section">
          <div className="auto-container">
            <div className="map-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-101.3955306101456!3d39.77170047498971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                width="600"
                height="535"
                frameBorder="0"
                style={{ border: 0, width: '100%' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section pt_120 pb_180">
          <div className="auto-container">
            <div className="form-inner">
              <form method="post" action="" id="contact-form" noValidate="noValidate">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Your name"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Type message"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                    <button type="submit" className="theme-btn" name="submit-form">
                      Submit<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ContactUs;


//CONTACT US PAGE //
import Head from 'next/head';
import Link from 'next/link';
import MainHeader1 from '../components/MainHeader1'; // Assuming you have this component
import Footer from '../components/Footer'; // Assuming you have this component

const News = () => {
  return (
    <div className="boxed_wrapper ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>News</title>
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/elpath.css" rel="stylesheet" />
        <link href="/assets/css/color/theme-color.css" id="jssDefault" rel="stylesheet" />
        <link href="/assets/css/switcher-style.css" rel="stylesheet" />
        <link href="/assets/css/odometer.css" rel="stylesheet" />
        <link href="/assets/css/rtl.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/module-css/page-title.css" rel="stylesheet" />
        <link href="/assets/css/module-css/error.css" rel="stylesheet" />
        <link href="/assets/css/module-css/cta.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        {/* Link to the news.css stylesheet */}
        <link href="/assets/css/module-css/newss.css" rel="stylesheet" />
      </Head>

      {/* Main Header */}
      <MainHeader1 />

      {/* Main Content */}
      <main className="main-content alternat-2">
        {/* Page Title */}
        <section className="page-title centred">
          <div
            className="bg-layer"
            style={{ backgroundImage: 'url(/assets/img/parx3.png)' }}
          ></div>
          <div
            className="pattern-layer"
            style={{ backgroundImage: 'url(/assets/img/shape/shape-18.png)' }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h2>News</h2>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>-</li>
                <li>News</li>
              </ul>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 news-box">
                <div className="news-item">
                  <figure className="image-box">
                    <img
                      src="/assets/images/news/news-1.jpg"
                      alt="News 1"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <Link href="#">News Title One</Link>
                    </h3>
                    <p>Short description of news article one.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 news-box">
                <div className="news-item">
                  <figure className="image-box">
                    <img
                      src="/assets/images/news/news-2.jpg"
                      alt="News 2"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <Link href="#">News Title Two</Link>
                    </h3>
                    <p>Short description of news article two.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 news-box">
                <div className="news-item">
                  <figure className="image-box">
                    <img
                      src="/assets/images/news/news-3.jpg"
                      alt="News 3"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <Link href="#">News Title Three</Link>
                    </h3>
                    <p>Short description of news article three.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section centred">
          <div className="auto-container">
            <div className="content-box">
              <h2>Want to Know More?</h2>
              <div className="btn-box">
                <Link href="/contact">
                  <a className="theme-btn btn-one">
                    Contact Us Now<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
//NEWS PAGE //

import Head from 'next/head';
import Link from 'next/link';
import MainHeader1 from '../components/MainHeader1'; // Assuming you have this component
import Footer from '../components/Footer'; // Assuming you have this component

const Services = () => {
  return (
    <div className="boxed_wrapper ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Our Services</title>
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/elpath.css" rel="stylesheet" />
        <link href="/assets/css/color/theme-color.css" id="jssDefault" rel="stylesheet" />
        <link href="/assets/css/switcher-style.css" rel="stylesheet" />
        <link href="/assets/css/odometer.css" rel="stylesheet" />
        <link href="/assets/css/rtl.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/module-css/page-title.css" rel="stylesheet" />
        <link href="/assets/css/module-css/error.css" rel="stylesheet" />
        <link href="/assets/css/module-css/cta.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        <link href="/assets/css/module-css/services.css" rel="stylesheet" />
      </Head>

      {/* Main Header */}
      <MainHeader1 />

      {/* Main Content */}
      <main className="main-content alternat-2">
        {/* Page Title */}
        <section className="page-title centred">
          <div
            className="bg-layer"
            style={{ backgroundImage: 'url(/assets/img/parx3.png)' }}
          ></div>
          <div
            className="pattern-layer"
            style={{ backgroundImage: 'url(/assets/img/shape/shape-18.png)' }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h2>Services</h2>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>-</li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 service-box">
                <div className="service-item">
                  <figure className="image-box">
                    <img
                      src="/assets/images/services/service-1.jpg"
                      alt="Service 1"
                    />
                  </figure>
                  <div className="text">
                    <h3>Service One</h3>
                    <p>Description of service one goes here.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 service-box">
                <div className="service-item">
                  <figure className="image-box">
                    <img
                      src="/assets/images/services/service-2.jpg"
                      alt="Service 2"
                    />
                  </figure>
                  <div className="text">
                    <h3>Service Two</h3>
                    <p>Description of service two goes here.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 service-box">
                <div className="service-item">
                  <figure className="image-box">
                    <img
                      src="/assets/images/services/service-3.jpg"
                      alt="Service 3"
                    />
                  </figure>
                  <div className="text">
                    <h3>Service Three</h3>
                    <p>Description of service three goes here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section centred">
          <div className="auto-container">
            <div className="content-box">
              <h2>Need More Information About Our Services?</h2>
              <div className="btn-box">
                <Link href="/contact">
                  <a className="theme-btn btn-one">
                    Contact Us Now<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;


