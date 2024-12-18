import "./CourseSignUp.css";

const CourseSignUp = () => {
  return (
    <section id="contact" className="course__signup">
      <div className="signup__content">
        <div className="signup__text">
          <h2 className="signup__title">Запишитесь на курс со скидкой 10%</h2>
          <p className="signup__description">
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <form className="signup__form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="signup__input"
            type="text"
            placeholder="Имя"
            required
          />
          <input
            className="signup__input"
            type="tel"
            placeholder="Телефон"
            required
          />
          <input
            className="signup__input"
            type="email"
            placeholder="E-mail"
            required
          />
          <button className="signup__button" type="submit">
            Оформить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default CourseSignUp;