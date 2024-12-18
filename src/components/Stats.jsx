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
      <p className="intro">
        <strong className="intro__highlight">Robo School</strong> – учреждение
        для формирования кадрового педагогического резерва в сфере робототехники
        и программирования
      </p>
      <div className="stat">
        {statsData.map((stat, index) => (
          <div key={index} className="stat__item">
            <h2 className="stat__number">{stat.number}</h2>
            <p className="stat__description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
