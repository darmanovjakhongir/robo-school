import "./CourseBenefits.css";

const benefitsData = [
  {
    title: "Удостоверение",
    description:
      "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях",
  },
  {
    title: "Знания",
    description:
      "По основам разработки учебно-методических комплексов по робототехнике и программированию",
  },
  {
    title: "Практику",
    description:
      "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)",
  },
];

const CourseBenefits = () => {
  return (
    <section id="about" className="course-benefits">
      <div className="course-benefits__header">
        <h2 className="course-benefits__title">Что вы получите после курса</h2>
      </div>
      <div className="course-benefits__note-container">
        <button className="course-benefits__note">При наличии свободных мест</button>
      </div>
      <div className="course-benefits__list">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="course-benefits__item">
            <h3 className="course-benefits__item-title">{benefit.title}</h3>
            <p className="course-benefits__item-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseBenefits;
