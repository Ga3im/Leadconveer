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

  let X1: number | null;
  let Y1: number | null;
  let Xdiff: number | null;
  let Ydiff: number | null;

  function touchStart(e: TouchEvent<HTMLDivElement>) {
    X1 = Math.round(e.touches[0].clientX);
    Y1 = Math.round(e.touches[0].clientY);
  }

  function touchMove(e: TouchEvent<HTMLDivElement>) {
    if (!X1 || !Y1) {
      return false;
    }
    let x2: number | null = Math.round(e.touches[0].clientX);
    let y2: number | null = Math.round(e.touches[0].clientY);

    let Xdiff: number | null = x2 - X1;
    let Ydiff: number | null = y2 - Y1;

    if (Math.abs(Xdiff) > Math.abs(Ydiff)) {
      if (Xdiff > 0) {
        swipeRight();
      } else {
        swipeLeft();
      }
    }
    X1 = null;
    Y1 = null;
  }

  const mouseStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    X1 = e.clientX;
    Y1 = e.clientY;
  };

  const mouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let x2: number | null = e.clientX;
    let y2: number | null = e.clientY;

    Xdiff = x2 - X1;
    Ydiff = y2 - Y1;

    X1 = null;
    Y1 = null;
    if (Math.abs(Xdiff) > Math.abs(Ydiff)) {
      if (Xdiff > 0) {
        swipeRight();
      } else {
        swipeLeft();
      }
    }
    X1 = null;
    Y1 = null;
  };

  const swipeLeft = (): void => {
    let prev: number = selected.id + 1;
    arr.map((i) => {
      if (prev === i.id) {
        setSelected(i);
      }
    });
  };

  const swipeRight = (): void => {
    let prev: number = selected.id - 1;
    arr.map((i) => {
      if (prev === i.id) {
        setSelected(i);
      }
    });
  };

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
    setSelected(arr[0]);
  }, []);

  return (
    <div className={s.wrapper}>
      <div
        onMouseDown={mouseStart}
        onMouseUp={mouseUp}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        className={s.content}
      >
        <h1 className={s.title}>Как это работает?</h1>
        <div className={s.swipeContent}>
          <div className={s.swipe}>
            <div className={s.left}>
              <div className={s.countContent}>
                <p className={s.count}>0{selected ? selected.id : arr[0].id}</p>
                <img src={selected ? selected.emodji : arr[0].emodji} alt="" />
              </div>
              <h2 className={s.titleItem}>
                {selected ? selected.title : arr[0].title}
              </h2>
            </div>
            <div className={s.right}>
              <p className={s.text}>{selected ? selected.text : arr[0].text}</p>
            </div>
          </div>
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
    </div>
  );
};
