import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={s.content}>
        <p className={s.title}>
          © 2025 Все права защищены. Технология «Лид Конвейер» - лидогенерация
          для бизнеса.
        </p>
        <p className={s.text}>
          ООО «ДС-ГРУПП» ИНН 7801355174 ОГРН 1187847129425
        </p>
        <div className={s.menu}>
          <p className={s.list}>Блог</p>
          <p className={s.list}>Договор-оферта</p>
          <p className={s.list}>Политика конфиденциальности</p>
          <p className={s.list}>Соглашение об обработке данных</p>
          <p className={s.lastlist}>Вход в личный кабинет</p>
        </div>
      </div>
    </>
  );
};
