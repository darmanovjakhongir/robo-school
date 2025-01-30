import "./SignUp.css";

const SignUp = () => {
  return (
    <section id="contact" className="signup">
      <div className="signup-content">
        <div className="signup-text">
          <h2 className="signup-title">Запишитесь на курс со скидкой 10%</h2>
          <p className="signup-description">
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="signup-input"
            type="text"
            placeholder="Имя"
            required
          />
          <input
            className="signup-input"
            type="tel"
            placeholder="Телефон"
            required
          />
          <input
            className="signup-input"
            type="email"
            placeholder="E-mail"
            required
          />
          <button className="signup-button" type="submit">
            Оформить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
