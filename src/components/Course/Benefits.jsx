import "./Benefits.css";

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

const Benefits = () => {
  return (
    <section id="about" className="benefits">
      <div className="benefits-header">
        <h2 className="benefits-title">Что вы получите после курса</h2>
      </div>
      <div className="benefit-note-container">
        <button className="benefit-note">При наличии свободных мест</button>
      </div>
      <div className="benefits">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
