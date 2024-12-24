import "./CourseSignUp.css";

const CourseSignUp = () => {
  return (
    <section id="contact" className="course-signup">
      <div className="course-signup__content">
        <div className="course-signup__text">
          <h2 className="course-signup__title">Запишитесь на курс со скидкой 10%</h2>
          <p className="course-signup__description">
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <form className="course-signup__form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="course-signup__input"
            type="text"
            placeholder="Имя"
            required
          />
          <input
            className="course-signup__input"
            type="tel"
            placeholder="Телефон"
            required
          />
          <input
            className="course-signup__input"
            type="email"
            placeholder="E-mail"
            required
          />
          <button className="course-signup__button" type="submit">
            Оформить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default CourseSignUp;
