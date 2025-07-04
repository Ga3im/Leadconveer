import s from "./Technology.module.css";

export const Technology = () => {
  return (
    <>
      <div className={s.content}>
        <div className={s.imgContent}>
            <img className={s.star} src="star.png" alt="" />
            <img className={s.img} src="technology.png" alt="" />
            <img className={s.secondStar} src="star.png" alt="" />
        </div>
        <div className={s.left}>
          <div className={s.leftTitle}>
            <h1>
              Технология <p className={s.spancolor}> «Лид Конвейер» </p>
            </h1>
            <img src="smile-sunglasses.png" alt="" />
          </div>
          <div className={s.textContent}>
            <p className={s.text}>
              Мы разработали программный комплекс, который позволяет определять
              контактные данные (телефон, Telegram, email) тех посетителей
              вашего сайта, кто был на сайте, но не оставил заявку.
            </p>
            <p className={s.text}>
              Далее, на основе собственных разработок, мы идентифицируем
              пользователей по интересам и интересующим их товарам и услугам —
              вам передаём только тех, кто заинтересован в вашей услуге
              или товаре.
            </p>
            <p className={s.text}>
              Вы платите только за результат — за полученных Лидов (заявки)
              на свои услуги или товары.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
