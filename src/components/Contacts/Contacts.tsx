import s from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <>
      <div className={s.content}>
        <div className={s.left}>
          <h1 className={s.title}>Контакты</h1>
          <p className={s.text}>
            Есть вопрос, или вы хотите получить бесплатную консультацию?
            Свяжитесь с нами, и мы предоставим необходимую информацию!
          </p>
          <div className={s.contacts}>
            <div>
              <p className={s.contactText}>Адрес офиса</p>
              <a
                className={s.phoneNumber}
                target="_blank"
                href="https://yandex.ru/maps/213/moscow/house/dubininskaya_ulitsa_53/Z04YcARmS0MBQFtvfXtzc3hlZQ==/?ll=37.636266%2C55.722461&z=16"
              >
                г. Москва, ул. Дубининская, д. 53
              </a>
            </div>
            <div>
              <p className={s.contactText}>Телефон:</p>
              <a
                className={s.phoneNumber}
                target="_blank"
                href="tel:+7 495 118-32-82"
              >
                +7 495 118-32-82
              </a>
            </div>
            <div>
              <p className={s.contactText}>Электронная почта</p>
              <p>mailbox@leadconveer.ru</p>
            </div>
          </div>
          <div className={s.telegram}>
            <p className={s.contactText}>
              Или напишите нам в любимом <br /> мессенджере:
            </p>
            <img className={s.telegramIcon} src="telegram-icon.png" alt="" />
          </div>
        </div>
        <img className={s.img} src="building.png" alt="" />
      </div>
    </>
  );
};
