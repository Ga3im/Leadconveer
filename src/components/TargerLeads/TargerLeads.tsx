import s from "./TargerLeads.module.css";

type arrType = {
  title: string;
  description: string;
  img: string;
};

export const TargerLeads = () => {
  const arr: arrType[] = [
    {
      title: "Оплата за результат",
      description:
        "Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)",
      img: "img1.png",
    },
    {
      title: "Качественные лиды",
      description:
        "Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу",
      img: "img2.png",
    },
    {
      title: "Любой объём — на ваш выбор",
      description:
        "Покупайте сколько контактов потенциальных клиентов в месяц — сколько требуется вам!",
      img: "img3.png",
    },
    {
      title: "Комплекс технологий",
      description:
        "После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявку",
      img: "img4.png",
    },
  ];
  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>
          Завалим ваш отдел продаж{" "}
          <p className={s.spancolor}> целевыми Лидами</p>
        </h1>
        <div className={s.list}>
          {arr.map((item) => (
            <div key={item.title} className={s.item}>
              <div className={s.itemContent}>
                <div className={s.itemContentTitle}>
                  <p className={s.itemTitle}>{item.title}</p>
                  <img className={s.itemStar} src="star.png" alt="" />
                </div>
                <p className={s.itemDescription}>{item.description}</p>
              </div>
              <img className={s.img} src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
