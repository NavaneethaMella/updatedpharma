import styles from './ServiceSection.module.css';

const ServiceSection = () => {
  return (
    <section className={styles.serviceStyleTwo}>
      <div className={`${styles.bgLayer} ${styles.parallaxBg}`} style={{ backgroundImage: 'url(assets/img/service-bg.png)' }}></div>
      <div className="auto-container">
        <div className={`${styles.secTitle} centred`}>
          <span className="sub-title">Our Services</span>
          <h2>Services We Provide</h2>
        </div>
        <div className={styles.tabsBox}>
          <div className={styles.tabBtnBox}>
            <ul className="tab-btns clearfix">
              <li className="tab-btn active-btn" data-tab="#tab-1">Service 1</li>
              <li className="tab-btn" data-tab="#tab-2">Service 2</li>
            </ul>
          </div>
          <div className="tabs-content">
            <div className="tab active-tab" id="tab-1">
              <div className="row clearfix">
                <div className="col-lg-6">
                  <div className="content-box">
                    <h2>Nullam augue lorem, sollicitudin ac purus quis</h2>
                    <p>Nullam augue lorem, sollicitudin ac purus quis, imperdiet volutpat elit.</p>
                    <ul className="list-style-two">
                      <li>Nam aliquam ligula at lectus ultricies, eu aliquam enim iaculis.</li>
                      <li>Fusce varius lacus quis nunc facilisis placerat.</li>
                      <li>In facilisis libero eget ligula hendrerit congue.</li>
                    </ul>
                    <div className="btn-box"><a href="#" className="theme-btn">Details</a></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image-box">
                    <figure><img src="assets/img/service-2.png" alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab" id="tab-2">
              <div className="row clearfix">
                <div className="col-lg-6">
                  <div className="content-box">
                    <h2>Nullam augue lorem, sollicitudin ac purus quis</h2>
                    <p>Nullam augue lorem, sollicitudin ac purus quis, imperdiet volutpat elit.</p>
                    <ul className="list-style-two">
                      <li>Nam aliquam ligula at lectus ultricies, eu aliquam enim iaculis.</li>
                      <li>Fusce varius lacus quis nunc facilisis placerat.</li>
                      <li>In facilisis libero eget ligula hendrerit congue.</li>
                    </ul>
                    <div className="btn-box"><a href="#" className="theme-btn">Details</a></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image-box">
                    <figure><img src="assets/img/service-1.png" alt="" /></figure>
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

export default ServiceSection;
