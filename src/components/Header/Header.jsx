import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ROBO.SCHOOL</div>
      <nav className="nav">
        <a className="nav-link" href="#about">
          О школе
        </a>
        <a className="nav-link" href="#trainers">
          Тренеры
        </a>
        <a className="nav-link" href="#pricing">
          Стоимость
        </a>
      </nav>
      <div className="contact">
        <a className="contact-number" href="#contact">
          +7 800 000 11 22
        </a>
      </div>
    </header>
  );
}

export default Header;
