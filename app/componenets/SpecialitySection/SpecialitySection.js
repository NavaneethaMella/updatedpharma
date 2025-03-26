import styles from './SpecialitySection.module.css';
import Image from 'next/image';

const SpecialitySection = () => {
  return (
    <main>
      <section className={styles.serviceStyleTwo}>
        <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/service-bg.png)' }}></div>
        <div className="auto-container">
          <div className={styles.secTitle}>
            <span className={styles.subTitle}>Our Services</span>
            <h2>Services We Provide</h2>
          </div>
          <div className={styles.tabsBox}>
            <div className={styles.tabBtnBox}>
              <ul className={styles.tabBtns}>
                <li className={`${styles.tabBtn} ${styles.activeBtn}`} data-tab="#tab-1">Service1</li>
                <li className={styles.tabBtn} data-tab="#tab-2">Service 2</li>
              </ul>
            </div>
            <div className={styles.tabsContent}>
              <div className={`${styles.tab} ${styles.activeTab}`} id="tab-1">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className={styles.contentBlock}>
                      <div className={styles.contentBox}>
                        <h2>Nullam augue lorem, sollicitudin ac purus quis</h2>
                        <p>Nullam augue lorem, sollicitudin ac purus quis, imperdiet volutpat elit. Nam convallis, neque et tincidunt accumsan</p>
                        <ul className={styles.listStyle}>
                          <li>Nam aliquam ligula at lectus ultricies, eu aliquam enim iaculis.</li>
                          <li>Fusce varius lacus quis nunc facilisis placerat.</li>
                          <li>In facilisis libero eget ligula hendrerit congue.</li>
                        </ul>
                        <div className={styles.btnBox}><a href="#" className="theme-btn btn-one">Details</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className={styles.imageBox}>
                      <figure className={styles.image}>
                        <Image src="/img/service-2.png" alt="" width={500} height={500} />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.tab} id="tab-2">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className={styles.contentBlock}>
                      <div className={styles.contentBox}>
                        <h2>Nullam augue lorem, sollicitudin ac purus quis</h2>
                        <p>Nullam augue lorem, sollicitudin ac purus quis, imperdiet volutpat elit. Nam convallis, neque et tincidunt accumsan</p>
                        <ul className={styles.listStyle}>
                          <li>Nam aliquam ligula at lectus ultricies, eu aliquam enim iaculis.</li>
                          <li>Fusce varius lacus quis nunc facilisis placerat.</li>
                          <li>In facilisis libero eget ligula hendrerit congue.</li>
                        </ul>
                        <div className={styles.btnBox}><a href="#" className="theme-btn btn-one">Details</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className={styles.imageBox}>
                      <figure className={styles.image}>
                        <Image src="/img/service-1.png" alt="" width={500} height={500} />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.specialitySection}>
        <div className={styles.bgColor}></div>
        <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/parx2.png)' }}></div>
        <div className={styles.patternLayer}>
          <div className={styles.pattern1} style={{ backgroundImage: 'url(img/shape/shape-7.png)' }}></div>
        </div>
        <div className="auto-container">
          <div className={styles.secTitle}>
            <span className={styles.subTitle}>Our Speciality</span>
            <h2>Morbi varius magna dictum lacus pellentesque</h2>
          </div>
          <div className="row">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={styles.specialityBlock}>
                  <div className={styles.specialityBlockOne}>
                    <div className={styles.iconBox}>
                      <div className={styles.rHex}>
                        <div className={styles.rHexInner}></div>
                      </div>
                      <div className={styles.icon}><i className="icon-2"></i></div>
                    </div>
                    <h3><a href="#">Morbi varius magna</a></h3>
                    <p>Morbi varius magna dictum lacus pellentesque</p>
                    <div className={styles.btnBox}>
                      <div className={styles.linkIcon}><a href="#"><i className="icon-23"></i></a></div>
                      <div className={styles.linkText}><a href="#">View</a></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workingStyleTwo}>
        <div className={styles.patternLayer}>
          <div className={styles.pattern1} style={{ backgroundImage: 'url(img/shape/shape-6.png)' }}></div>
          <div className={styles.pattern2} style={{ backgroundImage: 'url(img/shape/shape-11.png)' }}></div>
        </div>
        <div className="auto-container">
          <div className={styles.secTitle}>
            <span className={styles.subTitle}>Our Process</span>
            <h2>How We Work</h2>
          </div>
          <div className={styles.lowerContent}>
            <div className="row">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className={styles.workingBlock}>
                    <div className={styles.workingBlockTwo}>
                      <div className={styles.innerBox}>
                        <div className={styles.iconBox}>
                          <div className={styles.rHex}><div className={styles.rHexInner}></div></div>
                          <div className={styles.icon}><i className={`icon-2${index + 1}`}></i></div>
                        </div>
                        <h3><a href={`#step-${index + 1}`}>Step {index + 1}</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.eventsStyleTwo}>
        <div className={styles.bgLayer} style={{ backgroundImage: 'url(img/parx1.png)' }}></div>
        <div className="auto-container">
          <div className={styles.secTitle}>
            <span className={styles.subTitle}>Events</span>
            <h2>Upcoming Events</h2>
          </div>
          <div className={styles.innerContent}>
            <div className="single-item-carousel owl-carousel owl-theme owl-dots-none">
              <div className={styles.eventsBlockOne}>
                <div className={styles.innerBox}>
                  <figure className={styles.imageBox}><a href="#"><Image src="/img/event2.png" alt="" width={500} height={300} /></a></figure>
                  <div className={styles.lowerContent}>
                    <div className={styles.postDate}><h2>01<span>APR</span></h2></div>
                    <h3><a href="#">Fusce condimentum felis nec odio porta, non mattis diam posuere</a></h3>
                    <p>Nam ullamcorper risus eget interdum sagittis Nam ullamcorper risus eget interdum sagittis</p>
                    <div className={styles.lowerBox}>
                      <div className={styles.btnBox}><a href="#" className="theme-btn btn-one">View Event</a></div>
                    </div>
                    <ul className={styles.eventInfo}>
                      <li><i className="icon-1"></i>10AM</li>
                      <li><i className="icon-18">Test Location</i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.patternLayer}>
          <div className={styles.pattern1} style={{ backgroundImage: 'url(img/shape/shape-17.png)' }}></div>
          <div className={styles.pattern2} style={{ backgroundImage: 'url(img/shape/shape-18.png)' }}></div>
          <div className={styles.pattern3} style={{ backgroundImage: 'url(img/shape/shape-19.png)' }}></div>
        </div>
        <div className="auto-container">
          <div className={styles.secTitle}>
            <span className={styles.subTitle}>FAQs</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          </div>
          <div className={styles.innerContainer}>
            <ul className={styles.accordionBox}>
              {[...Array(2)].map((_, index) => (
                <li key={index} className={styles.accordionBlock}>
                  <div className={styles.accBtn}><h4><span>{index + 1}.</span> What is Lorem ipsum dolor sit amet?</h4></div>
                  <div className={styles.accContent}>
                    <div className={styles.content}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SpecialitySection;

