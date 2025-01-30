import herovideo from "../../assets/videos/intro-video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="background-video">
        <source src={herovideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="hero-title">ROBO SCHOOL</h1>
        <p className="hero-description">
          Курсы повышения квалификации по робототехнике для педагогов начальной
          школы
        </p>
        <button className="hero-button">Записаться на курс</button>
      </div>
    </section>
  );
}

export default Hero;
