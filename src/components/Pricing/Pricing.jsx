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
      <h2 className="pricing-title">Выберите нужный пакет</h2>
      <div className="pricing-cards-container">
        {pricingData.map((card, index) => (
          <div key={index} className="pricing-card">
            <h3 className="pricing-card-title">{card.title}</h3>
            <p className="pricing-card-price">{card.price}</p>
            <p className="pricing-card-description">{card.description}</p>
            <button className="pricing-cta-button">Оставить заявку</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
