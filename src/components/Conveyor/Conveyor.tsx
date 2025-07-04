import s from "./Conveyor.module.css";

type arrType = {
  option: string;
  title: string;
  price: string;
  text: string;
  list: string[];
};

export const Conveyor = () => {
  const arr: arrType[] = [
    {
      option: "Старт",
      title: `50 готовых лидов за`,
      price: "22 500 ₽",
      text: "Стартовый пакет для тех, кто хочет купить Лидов со своего сайта и повысить свои продаж",
      list: ["50 Лидов", "450 ₽ за один Лид", "Получение за 5–7 дней"],
    },
    {
      option: "Стандарт",
      title: "100 готовых лидов за",
      price: "40 000 ₽",
      text: "Оптимальный пакет Лидов для любого отдела продаж и для повышения продаж своих товаров или услуг",
      list: [
        "100 Лидов",
        "400 ₽ за один Лид",
        "Получение за 7–14 дней",
        "Возможность показа Лидам рекламы через Яндекс.Директ",
      ],
    },
    {
      option: "Премиум",
      title: "300 готовых лидов за",
      price: "90 000 ₽",
      text: "Максимум целевых Лидов в ближайшее время для вашего бизнеса которые уже завтра могут стать Вашими клиентами!",
      list: [
        "300 Лидов",
        "300 ₽ за один Лид",
        "Получение за 14–30 дней",
        "Возможность показа Лидам рекламы через Яндекс.Директ",
        "Готовый и конверсионный скрипт продаж целевым Лидам",
      ],
    },
  ];
  const services = [
    {
      title: "Создание промо-страницы",
      price: "15 000 ₽",
    },
    {
      title: "Настройка и ведение Яндекс.Директ",
      price: "10 000 ₽",
    },
  ];
  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>
          Стоимость технологий <p className={s.spancolor}> «Лид Конвейер»</p>
        </h1>
        <p className={s.text}>
          Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего
          сайта, без переплаты и абонентской платы
        </p>
        <div className={s.container}>
          {arr.map((item) => (
            <div
              key={item.option}
              className={item.option === "Стандарт" ? s.itemStandart : s.item}
            >
              <div>
                <div className={s.optionContent}>
                  {item.option === "Стандарт" ? (
                    <>
                      <span className={s.optionStandart}>{item.option}</span>
                      <img src="whiteStar.png" alt="" />
                    </>
                  ) : (
                    <>
                      <span className={s.option}>{item.option}</span>
                      <img src="darkStar.png" alt="" />
                    </>
                  )}
                </div>
                <p className={s.itemTitle}>
                  {item.title} <span className={s.price}>{item.price}</span>
                </p>
                <p className={s.itemText}>{item.text}</p>
                <ul className={s.list}>
                  {item.list.map((i) => (
                    <li className={s.listItem} key={i}>
                      <div className={s.birdie}></div>
                      <p> {i}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={s.selectBtn}>Купить</button>
            </div>
          ))}
        </div>
      </div>
      <div className={s.serviceWrapper}>
        <h1 className={s.serviceText}>Дополнительные услуги</h1>
        <div className={s.serviceContent}>
          {services.map((item) => (
            <div key={item.price} className={s.service}>
              <div className={s.serviceTextContent}>
                <p className={s.serviceItemText}>{item.title}</p>
                <img src="star.png" alt="" />
              </div>
              <p className={s.serviceItemPrice}>
                от <span className={s.price}>{item.price}</span>
              </p>
              <button className={s.selectBtn}>Выбрать</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
