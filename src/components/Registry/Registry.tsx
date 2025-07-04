import s from "./Registry.module.css";

export const Registry = () => {
  return (
    <>
      <div className={s.content}>
        <div className={s.left}>
          <h1 className={s.title}>
            Зарегистрируйтесь и добавьте свой проект в систему — начните
            получать Лидов сегодня!
          </h1>
          <button className={s.regBtn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
        <div className={s.right}>
          <img className={s.star} src="star.png" alt="" />
          <img className={s.img} src="reg-img.png" alt="" />
        </div>
      </div>
    </>
  );
};
