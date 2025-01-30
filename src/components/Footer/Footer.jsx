import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-logo">ROBO.SCHOOL</div>
        <p className="footer-description">© ROBO.SCHOOL</p>
      </div>
      <div className="footer-contact">
        <a className="footer-contact-number" href="#contact">
          +7 800 000 11 22
        </a>
      </div>
    </footer>
  );
}

export default Footer;
