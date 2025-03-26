import styles from './Client.module.css';

const Client = () => {
  return (
    <section className={`${styles.clientsSection} style-two`}>
      <div className="outer-container">
        <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
          <figure className="clients-logo"><a href="#"><img src="img/client.png" alt="" /></a></figure>
        </div>
      </div>
    </section>
  );
};

export default Client;
