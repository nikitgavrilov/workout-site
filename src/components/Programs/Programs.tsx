import React from "react";
import styles from "./Programs.module.scss";

const CARDS = [
  {
    id: 0,
    title: "WorkoutAthlete",
    subtitle: "Тренировки по воркауту",
    price: 1300,
    description: "Здесь ты найдешь тренировки со своим весом",
    image: "images/programs/bg-1.webp",
  },
  {
    id: 1,
    title: "StreetLiftingAthlete",
    subtitle: "Тренировки с весом на турниках и брусьях",
    price: 1800,
    description: "Тренируйся с дополнительным весом вместе с чемпионом мира",
    image: "images/programs/bg-2.webp",
  },
  {
    id: 2,
    title: "Мужской марафон",
    subtitle: "Тренировки в тренажерном зале",
    price: 4000,
    description: "Построй идеальное телосложение вместе с тренером за 45 дней",
    image: "images/programs/bg-3.webp",
  },
];

const Programs: React.FC = () => {
  return (
    <section className={styles.programs} id="programs">
      <div className={"container"}>
        <div className={`${styles.billboard} info`}>
          <h2 className={"info-title"}>Нас уже 20.000 базовчан! Присоединяйся!</h2>
        </div>
        <div className={styles.body}>
          <h2 className="title">Основные программы</h2>
          <div className={styles.cards}>
            {CARDS.map((card) => (
              <div key={card.id} className={styles.card} style={{ background: `url(${card.image}) 0 0/100% no-repeat` }}>
                <img src="images/icons/arrow-right.svg" alt="arrow" className={styles.arrow} />
                <h3 className={"card__title"} style={{ marginBottom: 5 }}>
                  {card.title}
                </h3>
                <h4 className={styles.cardSubTitle}>{card.subtitle}</h4>
                <p className={"card__price"} style={{ marginBottom: 20 }}>
                  {card.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}
                </p>
                <p className={"card__description"}>{card.description}</p>
              </div>
            ))}
          </div>
          <div
            className={styles.individual}
            style={{ background: "url(images/programs/individual.webp) right bottom 0 no-repeat" }}
          >
            <div className={styles.individualInfo}>
              <h3 className={"card__title"} style={{ marginBottom: 20 }}>
                Индивидуальный подход
              </h3>
              <p className={"card__description"}>
                Получи максимальный пакет и тренируйся вместе с нами без ограничений. Ты получишь VIP доступы ко всем тренировкам,
                чатам и общению со всей командой и 100% гарантию результата!
              </p>
            </div>
            <div className={styles.individualPrice}>
              <p className={styles.individualYear}>доступ: 1 год</p>
              <p className={"card__price"}>{(8000).toLocaleString("ru-RU", { style: "currency", currency: "RUB" })} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
