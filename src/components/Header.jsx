import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">ROBO.SCHOOL</div>
      <nav className="header__nav">
        <a className="header__nav-link" href="#about">
          О школе
        </a>
        <a className="header__nav-link" href="#trainers">
          Тренеры
        </a>
        <a className="header__nav-link" href="#pricing">
          Стоимость
        </a>
      </nav>
      <div className="header__contact">
        <a className="header__contact-number" href="#contact">
          +7 800 000 11 22
        </a>
      </div>
    </header>
  );
}

export default Header;
