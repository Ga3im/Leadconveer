import s from "./Adme.module.css";

type arrayType = {
  id: number;
  emodji: string;
  title: string;
  text: string;
};

export const Adme = () => {
  const arr: string[] = [
    "Только качественные Лиды. Мы идентифицируем толькотех посетителей, которым интересна ваша услуги и из вашего города.",
    "Доступная цена и отсутствие минимального порога. У нас отсутствует минимальная плата за сервис, подписка и т.п. Вы покупаете столько Лидов — сколько хотите!",
    "Техническая поддержка и комплекс услуг. Мы работаем для вас 24/7!",
  ];

  const array: arrayType[] = [
    {
      id: 1,
      emodji: "high-voltage.png",
      title: "Источник Лидов",
      text: "контекстная реклама в Яндекс.Директ, SEO, SMM и другая реклама дополняют технологию «Лид Конвейер».",
    },
    {
      id: 2,
      emodji: "fire.png",
      title: "Вы экономите на рекламе",
      text: "получая контактные данных тех, кто не оставил заявки, но заинтересован в Вашем товаре или услуге — это дополнительный канал продаж.",
    },
    {
      id: 3,
      emodji: "glowing-star.png",
      title: "Вы сможете прогнозировать продажи",
      text: "чтобы не ждать, когда-же кто‑то позвонит или оставит заявку, звоните и продавайте первым!",
    },
    {
      id: 4,
      emodji: "hundred-points.png",
      title: "Безопасно",
      text: "это абсолютно легальный и законный метод получения Лидов.",
    },
    {
      id: 5,
      emodji: "woman-running.png",
      title: "Быстро:",
      text: "запуск и получение первых Лидов обычно занимает 5–7 дней, а добавление проекта в систему менее 1 часа.",
    },
  ];
  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>
          Почему лучше <p className={s.spancolor}> заказать Лидов у нас</p>
        </h1>
        <p className={s.text}>
          Лидогенерация — это стабильное получение клиентов <br /> и выполнение
          плана по продажам!
        </p>
        <div>
          <div className={s.arr}>
            {arr.map((item, index) => (
              <div key={item} className={s.arrContent}>
                <div className={s.top}>
                  <p className={s.arrCount}>0{index + 1}</p>
                  <img src="darkStar.png" alt="" />
                </div>
                {item}
              </div>
            ))}
          </div>
          <div className={s.bottomContent}>
            {array.map((i) => (
              <div key={i.id} className={s.bottom}>
                <img className={s.emodji} src={i.emodji} alt="" />
                <p className={s.bottomText}>
                  <span className={s.textTitle}>{i.title}</span>: {i.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
