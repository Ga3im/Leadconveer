import { useState } from "react";
import s from "./QuestionAnswer.module.css";

type arrType = {
  text: string;
  hiddenText: string[];
};

export const QuestionAnswer = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const arr: arrType[] = [
    {
      text: "На сколько это безопасно, законно и может ли навредить моему сайту?",
      hiddenText: [
        "Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.",
        "Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта. Таким образом, это гарантирует полную легальность работы с данными.",
        "Для сайта это не может навредить, и санкций со стороны поисковых системы (Яндекс, Google) нет. ",
      ],
    },
    { text: "Откуда берутся номера телефонов?", hiddenText: [] },
    {
      text: "Смогу ли я сам установить код на сайт?",
      hiddenText: [],
    },
    {
      text: "На какую CMS или конструктор можно установить код «Лид Конвейер»?",
      hiddenText: [],
    },
    { text: "Как оплатить ваш сервис?", hiddenText: [] },
  ];

  const showHiddenText = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    const text = e.target as HTMLElement;

    arr.map((i) => i.text === text.textContent);
    if (text.textContent !== opened) {
      setOpened(text.textContent);
    } else {
      setOpened(null);
    }
  };
  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>Вопросы и ответы</h1>
        <div className={s.main}>
          <div className={s.listContent}>
            {arr.map((item) => (
              <div key={item.text}>
                <div
                  onClick={showHiddenText}
                  className={item.text === opened ? s.listActive : s.list}
                >
                  <p>{item.text}</p>
                  {opened === item.text ? (
                    <div className={s.minus}></div>
                  ) : (
                    <div className={s.plus}></div>
                  )}
                </div>
                {opened === item.text && (
                  <div className={s.openedText}>
                    {item.hiddenText.map((i) => (
                      <p className={s.openedTextList}>{i}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <img className={s.img} src="woman-street.png" alt="" />
        </div>
      </div>
    </>
  );
};
