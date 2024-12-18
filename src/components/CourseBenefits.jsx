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
    <section id="about" className="course__benefits">
      <div className="course__header">
        <h2 className="course__benefits__title">Что вы получите после курса</h2>
      </div>
      <div className="benefit__note__container">
        <button className="benefit__note">При наличии свободных мест</button>
      </div>
      <div className="benefits">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit__item">
            <h3 className="benefit__title">{benefit.title}</h3>
            <p className="benefit__description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseBenefits;