import { useState } from "react";
import s from "./Customer.module.css";

type arrayType = {
  star: number;
  text: string;
  niche: string;
};

export const Customer = () => {
  const [playing, setPlaying] = useState<null | number>(null);

  const videos: number[] = [1, 2, 3];

  const arr: string[] = [
    "client1.png",
    "client2.png",
    "client3.png",
    "client4.png",
  ];

  const array: arrayType[] = [
    {
      star: 5.0,
      text: "«Стабильно получаем новые лиды из сервиса. С точки зрения рентабельности нареканий нет. Тёплая заявка 800–1000 рублей, конверсия, цена-качество устраивает. Общее впечатление достаточно хорошее, цена, качество, скорость».",
      niche: "Ниша: банкротство, списание долгов",
    },
    {
      star: 4.8,
      text: "«С вашим сервисом работаем с июня 22 года. Нас заинтересовало, и мы решили протестировать. Взяли минимальный пакет из 10 новых лидов, а потом, как он закончился, взяли повышенный пакет. Учитывая нашу сферу и посмотреть статистику, из 100 заинтересованных 15 в продажу. Это хороший результат».",
      niche: "Ниша: банкротство, списание долгов",
    },
    {
      star: 5.0,
      text: "«С сервисом работаем чуть меньше года. Немного сомневались, но согласились попробовать, а после продолжили работать. Новые клиенты появились сразу, передали на наш колл-центр. С вашего источника дешевле, чем с других сервисов. Безусловно, с вами стоит работать».",
      niche: "Ниша: банкротство, списание долгов",
    },
    {
      star: 4.9,
      text: "«С вашей компанией работаем более 2‑х лет, сотрудничество полезное. Мы все посмотрели, разобрались, что сервис даёт реально целевые заявки. Заключили контракт на 23 000 рублей, окупилось. Понравилась технология, она помогает нам получать лиды».",
      niche: "Ниша: банкротство, списание долгов",
    },
  ];

  const arrForRepeat = (number: number): number[] => {
    const array = [];
    for (let i = 0; i < number; i++) {
      array.push(i);
    }
    return array;
  };

  const starCount = (stars: number) => {
    const star: number = Math.floor(stars);
    return arrForRepeat(star).map((i) => (
      <img key={i} className={s.stars} src="star.png" alt="" />
    ));
  };

  const miniStarCount = (stars: number) => {
    const star: number = Math.floor(stars);
    const ministar = Math.round((stars % star) * 10);
    if (ministar === 1 || ministar === 2 || ministar === 3) {
      return <img className={s.stars} src="minstar.png" alt="" />;
    }
    if (ministar === 4 || ministar === 5 || ministar === 6) {
      return <img className={s.stars} src="half-star.png" alt="" />;
    }
    if (ministar === 7 || ministar === 8 || ministar === 9) {
      return <img className={s.stars} src="maxstar.png" alt="" />;
    }
  };

  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>
          Клиенты, которые уже покупают
          <p className={s.spancolor}>Лидов для своего бизнеса</p>
        </h1>
        <p className={s.text}>
          Более 5000 компаний по всей России <br /> уже используют покупку
          Лидов!
        </p>
        <div className={s.list}>
          {arr.map((item) => (
            <div key={item} className={s.item}>
              <img className={s.img} key={item} src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className={s.review}>
        <h1 className={s.reviewTitle}>Отзывы клиентов</h1>
        <p className={s.reviewText}>
          Более 89% наших клиентов сотрудничают с нами <br /> ежемесячно
          на протяжении более 2-х лет
        </p>
        <div className={s.reviewList}>
          {array.map((item) => (
            <div key={item.text} className={s.reviewItem}>
              <div className={s.starsContent}>
                <div className={s.star}>{item.star.toFixed(1)}</div>
                <div>
                  {starCount(item.star)}
                  {miniStarCount(item.star)}
                </div>
              </div>
              <p className={s.reviewItemText}>{item.text}</p>
              <p className={s.niche}>{item.niche}</p>
            </div>
          ))}
        </div>
        <div className={s.videoContent}>
          {videos.map((i) => (
            <div key={i}>
              <div className={s.video}>
                {i === playing ? (
                  <div className={s.pause} onClick={() => setPlaying(null)}>
                    <div className={s.leftItem}></div>
                    <div className={s.rightItem}></div>
                  </div>
                ) : (
                  <div onClick={() => setPlaying(i)} className={s.play}></div>
                )}
              </div>
              <p className={s.videoText}>
                Отзыв <span>{i + 1}:</span> название
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
