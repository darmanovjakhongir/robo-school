import React, { useState, useEffect } from "react";
import irinalime from "../assets/images/irina-lime.jpg";
import marinaorlova from "../assets/images/marina-orlova.jpg";
import maximpetrov from "../assets/images/maxim-petrov.jpg";
import konstantinnazarov from "../assets/images/konstantin-nazarov.jpg";
import lisavesennyaya from "../assets/images/lisa-vesennyaya.jpg";
import "./Carousel.css";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Ирина Лайм",
      desc: "преподаватель по робототехнике",
      image: irinalime,
    },
  },
  {
    player: {
      title: "Марина Орлова",
      desc: "преподаватель по робототехнике",
      image: marinaorlova,
    },
  },
  {
    player: {
      title: "Максим Петров",
      desc: "преподаватель по программированию",
      image: maximpetrov,
    },
  },
  {
    player: {
      title: "Константин Назаров",
      desc: "преподаватель по робототехнике",
      image: konstantinnazarov,
    },
  },
  {
    player: {
      title: "Лиза Весенняя",
      desc: "преподаватель по программированию",
      image: lisavesennyaya,
    },
  },
];

const length = _items.length;
_items.push(..._items);

const Carousel = ()=> {
  const [items, setItems] = useState(Array.from(Array(_items.length).keys()));
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const createItem = (position, idx) => {
    const item = {
      styles: {
        transform: `translateX(${position * slideWidth}rem)`,
      },
      player: _items[idx].player,
    };

    if (position === length - 1 || position === length + 1) {
      item.styles = { ...item.styles, filter: "grayscale(1)" };
    } else if (position !== length) {
      item.styles = { ...item.styles, opacity: 0 };
    }

    return item;
  };

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => prev.map((_, i) => prev[(i + jump) % items.length]));
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) =>
        prev.map((_, i) => prev[(i - jump + items.length) % items.length])
      );
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) setTimeout(() => setIsTicking(false), 300);
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <div id="trainers" className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn__prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn__arrow carousel__btn__arrow__left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide__list">
            {items.map((pos, i) => {
              const item = createItem(pos, i);
              return (
                <li className="carousel__slide__item" style={item.styles} key={i}>
                  <div className="carousel__slide__item__img__link">
                    <img src={item.player.image} alt={item.player.title} />
                  </div>
                  <div className="carousel__slide__item__body">
                    <h4>{item.player.title}</h4>
                    <p>{item.player.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn__next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn__arrow carousel__btn__arrow__right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
