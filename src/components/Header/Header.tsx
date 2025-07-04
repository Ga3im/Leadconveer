import s from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={s.content}>
        <img className={s.logo} src="LOGO.png" alt="" />
        <div className={s.mid}>
          <p className={s.text}>Как это работает</p>
          <p className={s.text}>Цена</p>
          <p className={s.text}>Отзывы</p>
          <p className={s.text}>Контакты</p>
        </div>
        <div className={s.right}>
          <img className={s.icons} src="whatsapp-icon.png" alt="" />
          <img className={s.icons} src="telegram-icon.png" alt="" />
          <a
            href="tel:+7 495 118-32-82"
            target="_blank"
            className={s.phoneNumer}
          >
            +7 495 118-32-82
          </a>
        </div>
      </div>
    </>
  );
};
