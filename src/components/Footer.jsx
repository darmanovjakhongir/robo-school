import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__logo">ROBO.SCHOOL</div>
        <p className="footer__description">© ROBO.SCHOOL</p>
      </div>
      <div className="footer__contact">
        <a className="footer__contact__number" href="#contact">
          +7 800 000 11 22
        </a>
      </div>
    </footer>
  );
}

export default Footer;