import "./Stats.css";

const statsData = [
  {
    number: "10",
    description: "УМК по различным направлениям по робототехнике",
  },
  { number: "20", description: "Школ, в которых запущена робототехника" },
  {
    number: "100",
    description: "Педагогов прошедших курсы повышения квалификации",
  },
  {
    number: "10000",
    description: "Обученных детей на базе собственных центров",
  },
];

const Stats = () => {
  return (
    <section id="about" className="stats">
      <p className="stats__intro">
        <strong className="stats__intro-highlight">Robo School</strong> – учреждение
        для формирования кадрового педагогического резерва в сфере робототехники
        и программирования
      </p>
      <div className="stats__list">
        {statsData.map((stat, index) => (
          <div key={index} className="stats__item">
            <h2 className="stats__number">{stat.number}</h2>
            <p className="stats__description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
