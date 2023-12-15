import { useInView } from "react-intersection-observer";
import m from "./Faq.module.scss";
import Issue from "./Issue/Issue";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Faq = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // чтобы анимация происходила только один раз
  });
  const animationVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0 },
  };
  const data = [
    {
      id: 0,
      preview: "Как я получу чит?",
      text: "После оплаты вы получите письмо с ссылкой на регистрацию в лоадере и ключ который нужно будет ввести. Видео инструкция прилагается",
    },
    {
      id: 0,
      preview: "Как я пойму что это не обман?",
      text: `${`Мы на рынке более 7 лет, наша группа вконтакте: https://vk.com/cheatforcountersrike а так же отзывы вы найдете в этой же группе
    WMID 477538172383 Продавца на который вы можете подать в арбитражный суд в случае если продавец не предоставит вам купленный товар.
    Наш дочерний проект Procheat.ru`}`,
    },
    {
      id: 0,
      preview: "Почему не приходит письмо с товаром?",
      text: "Если не приходит письмо, очевидно ваша оплата стоит в режиме ожидания. Вы можете запросить доступ к купленным товарам через форму http://oplata.info/ указав свой емаил. Вам придёт письмо с доступом на страницу товаров где вы можете наблюдать обработку покупки.",
    },
    {
      id: 0,
      preview: "Что если после покупки чит не будет работать?",
      text: "Наша служба поддержки работать Вконтакте, вы всегда можете нам написать, свободный саппорт ответит на ваш вопрос и поможет с установкой.",
    },
  ];
  return (
    <Element name="Faq">
      <div className={m.container}>
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.5 }}
          className={m.wrapper}
        >
          <h1 className={m.title}>Faq</h1>
          <div className={m.content}>
            {data.map((items) => (
              <Issue key={items.id} preview={items.preview} text={items.text} />
            ))}
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Faq;
