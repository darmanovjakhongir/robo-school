import "./Pricing.css";

const pricingData = [
  {
    title: "– PRO –",
    price: "20.000 ₽",
    description: "УМК по робототетхнике и программированию",
  },
  {
    title: "– ROBO –",
    price: "15.000 ₽",
    description: "УМК по робототетхнике",
  },
  {
    title: "– PROG –",
    price: "10.000 ₽",
    description: "УМК по программированию",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2 className="pricing__title">Выберите нужный пакет</h2>
      <div className="pricing__cards">
        {pricingData.map((card, index) => (
          <div key={index} className="pricing__card">
            <h3 className="pricing__card__title">{card.title}</h3>
            <p className="pricing__card__price">{card.price}</p>
            <p className="pricing__card__description">{card.description}</p>
            <button className="pricing__card__cta">Оставить заявку</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
