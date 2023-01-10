import React from "react"; // импорт библиотеки
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import data from "../../utils/data.js";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabmenu = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};
const MenuBlock = (props) => {
  return (
    <section className={`${styles.root} mr-10`}>
      <div className={styles.ingredients}>
        <h2
          className={`${styles.sectionTitle} text_type_main-medium mt-2 mb-6`}
        >
          {props.nameBlock}
        </h2>
        <ul className={`${styles.cardContainer} pl-4 pr-2`}>
          {data
            .filter((el) => el.type === props.type)
            .map((el, ind) => (
              <li key={el._id}>
                <a className={styles.link} href={"http://"}>
                  {
                    <span
                      className={`${styles.count} text_type_digits-default`}
                    >
                      2
                    </span>
                  }
                  <img src={el.image} alt="" />
                  <span
                    className={`${styles.price} mt-2 mb-1 text_type_digits-default`}
                  >
                    {el.price}
                    <CurrencyIcon type="primary" />
                  </span>
                  <p className={`${styles.name} text_type_main-default`}>
                    {el.name}
                  </p>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

class BurgerIngredients extends React.Component {
  render() {
    return (
      <>
        <div className={styles.block}>
          <h1 className={`${styles.title} text_type_main-large mt-10 mb-5`}>
            Соберите бургер
          </h1>
          <div style={{ display: "flex" }} className={`mb-8`}>
            {<Tabmenu />}
          </div>
          <div
            className={styles.ingredients}
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            <MenuBlock nameBlock="Булки" type="bun" />
            <MenuBlock nameBlock="Соусы" type="sauce" />
            <MenuBlock nameBlock="Ночинки" type="main" />
          </div>
        </div>
      </>
    );
  }
}

export default BurgerIngredients;
