import s from "./Reg.module.css";

export const Reg = () => {
  return (
    <>
      <div className={s.content}>
        <div className={s.left}>
          <img className={s.star} src="star.png" alt="" />
          <img className={s.joyful} src="joyful.png" alt="" />
          <img className={s.secondStar} src="star.png" alt="" />
        </div>
        <div className={s.right}>
          <h1 className={s.title}>
            Давайте принесём результат Вашему бизнесу? Завалите своей отдел
            продаж Лидами!
          </h1>
          <button className={s.regBtn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
      </div>
    </>
  );
};
