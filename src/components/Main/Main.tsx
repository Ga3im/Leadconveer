import { Header } from "../Header/Header";
import s from "./Main.module.css";

export const Main = () => {
  const arr = [
    "Лидогенерация в b2b",
    "Биржа лидов",
    "Сервис по Лидгену",
    "Лиды для производства",
    "Клиенты для бизнеса",
    "Определить телефон посетителя сайта",
  ];
  return (
    <>
      <div className={s.wrapper}>
        <Header />

        <div className={s.content}>
          <div className={s.left}>
            <h1 className={s.title}>
              <span className={s.spancolor}>Лидогенерация</span> для бизнеса
            </h1>
            <div className={s.textContent}>
              <p className={s.text}>
                Покупайте только целевые лиды <br /> по фиксированной цене
                от 300 ₽
              </p>
              <img src="money-mouth-face.png" className={s.smile} />
            </div>
            <button className={s.selectBtn}>ВЫБРАТЬ ПАКЕТ ЛИДОВ</button>
          </div>
          <div className={s.imgContent}>
            <img className={s.star} src="star.png" alt="" />
            <img className={s.secondStar} src="star.png" alt="" />
            <img className={s.img} src="woman-with-laptop.png " alt="" />
          </div>
        </div>
        <div className={s.bottom}>
          {arr.map((item) => (
            <button key={item} className={s.btn}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
