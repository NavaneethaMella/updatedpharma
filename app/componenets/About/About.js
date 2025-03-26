import styles from './About.module.css';

const About = () => {
  return (
    <section className={`${styles.aboutStyleTwo} pt-120 pb-120`}>
      <div className={styles.patternLayer}>
        <div className={styles.pattern1} style={{ backgroundImage: 'url(img/shape/shape-13.png)' }}></div>
        <div className={styles.pattern2} style={{ backgroundImage: 'url(img/shape/shape-14.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="contentBlockOne">
              <div className={`${styles.contentBox} sec-title-animation animation-style2`}>
                <div className="sec-title mb-25">
                  <span className="sub-title mb-20 title-animation">Pharma</span>
                  <h2 className="title-animation">We Offer Trusted and Premium Service</h2>
                </div>
                <div className="text-box mb-45 title-animation">
                  <p>
                    MBS Pharma offers a full spectrum of FDA-related services and employs an integrated approach—that
                    incorporates the use of scientific and technical expertise—to provide specific, actionable
                    recommendations to our clients.
                  </p>
                  <ul className="list-style-one clearfix">
                    <li>Document preparation and review (including NDAs, INDs, ANDAs, NADAs, and DMFs)</li>
                    <li>Continuous Improvement</li>
                    <li>Data Integrity</li>
                  </ul>
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn">Contact Us<span></span><span></span><span></span><span></span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="imageBlockTwo">
              <div className="image-inner">
                <div className="image-shape">
                  <div className={styles.shape1} style={{ backgroundImage: 'url(img/shape/shape-12.png)' }}></div>
                  <div className={styles.shape2} style={{ backgroundImage: 'url(img/shape/shape-12.png)' }}></div>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <div className="image-box">
                      <figure className="image mb-30"><img src="img/about2.png" alt="" /></figure>
                      <div className="experience-box bounce-slide">
                        <div className="inner p-relative pt-5 pb-5">
                          <h2>30 <span>Years</span></h2>
                          <h3>of experience offering compliance, regulatory affairs, and technical services</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <figure className="image pt-100 mt-15"><img src="img/about3.png" alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
