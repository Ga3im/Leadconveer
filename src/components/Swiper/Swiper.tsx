import { useEffect, useState, type TouchEvent } from "react";
import s from "./Swiper.module.css";

type arrType = {
  id: number;
  emodji: string;
  title: string;
  text: string;
};

export const Swiper = () => {
  const [selected, setSelected] = useState<arrType | null>(null);
  // document.addEventListener("touchstart", touchStart, false);
  // document.addEventListener("touchmove", touchMove, false);

  let x1: number | null = null;
  let y1: number | null = null;

  function touchStart(e: TouchEvent<HTMLDivElement>) {
    x1 = Math.round(e.touches[0].clientX);
    y1 = Math.round(e.touches[0].clientY);
  }

  function touchMove(e: TouchEvent<HTMLDivElement>) {
    if (!x1 || !y1) {
      return false;
    }
    let x2: number | null = Math.round(e.touches[0].clientX);
    let y2: number | null = Math.round(e.touches[0].clientY);

    let Xdiff: number | null = x2 - x1;
    let Ydiff: number | null = y2 - y1;

    if (Math.abs(Xdiff) > Math.abs(Ydiff)) {
      if (Xdiff > 0) {
        console.log("right");
      } else {
        console.log("left");
      }
    } else {
      if (Ydiff > 0) {
        console.log("top");
      } else {
        console.log("bottom");
      }
    }
    x1 = null;
    y1 = null;
  }

  const arr: arrType[] = [
    {
      id: 1,
      emodji: "emodji1.png",
      title: " Регистрация и добавление проекта в систему",
      text: "1. Зарегистрируйтесь в нашем личном кабинете 2.При добавление проекта вам необходимо указать URL (адрес) своего сайта  3.Для вашего сайта будет сгенерирован уникальный код, который необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>)",
    },
    {
      id: 2,
      emodji: "emodji2.png",
      title: "Выбор пакета и количества Лидов",
      text: "После добавления проекта в систему, вам необходимо выбрать тот пакет и количество Лидов, которое вам необходимо.",
    },
    {
      id: 3,
      emodji: "emodji3.png",
      title: "Оплата проекта",
      text: "Оплатить Лидов вы сможете пластиковой картой или безналичным переводом.",
    },
    {
      id: 4,
      emodji: "emodji4.png",
      title: "Получение кода для сайта",
      text: "После оплаты, система для вас сгенерирует код, который вам необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>).",
    },
    {
      id: 5,
      emodji: "emodji5.png",
      title: "Начало получения Лидов",
      text: "В зависимости от вашей тематики (услуги или товара), а также объёма вашего трафика сайта система будет добавлять в личном кабинете контакты потенциальных клиентов, заинтересованных в вашей услуги и из вашего региона.",
    },
  ];

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>Как это работает?</h1>
        <div
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          className={s.swipeContent}
        >
          {arr.map((item, index) => (
            <div key={item.emodji} className={s.swipe}>
              <div className={s.left}>
                <div className={s.countContent}>
                  <p className={s.count}>0{index + 1}</p>
                  <img src={item.emodji} alt="" />
                </div>
                <h2 className={s.titleItem}>{item.title}</h2>
              </div>
              <div className={s.right}>
                <p className={s.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={s.page}>
          {arr.map((i) => (
            <div
              onClick={() => setSelected(i)}
              key={i.id}
              className={
                i.id === selected?.id ? s.pageCountCurrent : s.pageCount
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
