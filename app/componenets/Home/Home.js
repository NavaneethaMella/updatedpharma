import Head from 'next/head'
import Link from 'next/link'
import { FaTimes, FaTwitter, FaFacebookSquare, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa'
//import 'react-owl-carousel/owl.carousel.min.css';
//import 'react-owl-carousel/owl.theme.default.min.css';

import ReactOwlCarousel from 'react-owl-carousel';

//import 'react-owl-carousel/css';
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>MBS Pharma</title>
        <meta name="description" content="Pharmaceutical Consulting Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><FaTimes /></div>

        <nav className="menu-box">
          <div className="nav-logo"><a href="#"><img src="assets/img/logo.png" alt="" title="" /></a></div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>MBS Pharma, USA</li>
              <li><a href="tel:+8801682648101">+1-760-845-1576</a></li>
              <li><a href="mailto:info@example.com">info@mbapharmas.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaFacebookSquare /></a></li>
              <li><a href="#"><FaPinterestP /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </div>
        </nav>
      </div>

      <main className={styles.mainContent}>
        <section className="banner-style-two p_relative">
          <div className="bg-layer" style={{ backgroundImage: 'url(assets/img/banner4.png)' }}></div>
          <div className="bg-color"></div>
          <div className="pattern-layer" style={{ backgroundImage: 'url(assets/img/shape/shape-11.png)' }}></div>
          <div className="auto-container">
            <div className="content-box">
              <span className="sub-title mb_20">Dedication, Experience & Quality</span>
              <h2>MBS  <span>Pharma</span></h2>
              <p>We offer a full portfolio of FDA-related and pharmaceutical consulting services to drive positive results for clients as they prevent and resolve compliance problems and develop new pharmaceutical products for regulatory submission and approval by FDA</p>
              <div className="btn-box">
                <Link href="/contact">
                  <a className="theme-btn">Contact Us <span></span><span></span><span></span><span></span></a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="clients-section style-two">
          <div className="outer-container">
            <ReactOwlCarousel className="owl-carousel owl-theme owl-dots-none owl-nav-none">
              <figure className="clients-logo"><a href="#"><img src="assets/img/client.png" alt="" /></a></figure>
              <figure className="clients-logo"><a href="#"><img src="assets/img/client.png" alt="" /></a></figure>
              <figure className="clients-logo"><a href="#"><img src="assets/img/client.png" alt="" /></a></figure>
              <figure className="clients-logo"><a href="#"><img src="assets/img/client.png" alt="" /></a></figure>
            </ReactOwlCarousel>
          </div>
        </section>

        <section className="about-style-two pt_120 pb_120">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box mt_25 mr_70 sec-title-animation animation-style2">
                    <div className="sec-title mb_25">
                      <span className="sub-title mb_20 title-animation">Pharma</span>
                      <h2 className="title-animation">We Offer Trusted and Premium Service</h2>
                    </div>
                    <div className="text-box mb_45 title-animation">
                      <p>MBS Pharma offers a full spectrum of FDA-related services and employs an integrated approach—that incorporates the use of scientific and technical expertise—to provide specific, actionable recommendations to our clients</p>
                      <ul className="list-style-one clearfix">
                        <li>Document preparation and review (including NDAs, INDs, ANDAs, NADAs, and DMFs)</li>
                        <li>Continuous Improvement</li>
                        <li>Data Integrity</li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <Link href="/contact">
                        <a className="theme-btn">Contact Us<span></span><span></span><span></span><span></span></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_two">
                  <div className="image-inner">
                    <div className="image-shape">
                      <div className="shape-1" style={{ backgroundImage: 'url(assets/img/shape/shape-12.png)' }}></div>
                      <div className="shape-2" style={{ backgroundImage: 'url(assets/img/shape/shape-12.png)' }}></div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="image-box">
                          <figure className="image mb_30"><img src="assets/img/about2.png" alt="" /></figure>
                          <div className="experience-box bounce-slide">
                            <div className="inner p_relative pt_5 pb_5">
                              <h2>30 <span>Years</span></h2>
                              <h3>of experience offering compliance, regulatory affairs, and technical services</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <figure className="image pt_100 mt_15"><img src="assets/img/about3.png" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections can be added in a similar way */}

      </main>
    </>
  )
}
