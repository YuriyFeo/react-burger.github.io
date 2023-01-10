import React from "react"; // импорт библиотеки
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import data from "../../utils/data.js";

const BurgerConstructor = () => {
  return (
    <div className={styles.constructor__block}>
      <section className={styles.root}>
        <div className={`${styles.container} `}>
          {
            <div className={`${styles.item} pl-8 mb-4 pr-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={"Краторная булка N-200i (верх)"}
                price={200}
                thumbnail={data[0]["image_large"]}
              />
            </div>
          }
          {
            <div className={`${styles.scrollable} mb-4 pr-4`}>
              {
                <>
                  <div className={`${styles.item}  mb-4`} draggable>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      isLocked={false}
                      text={"Краторная булка N-200i (низ)"}
                      price={9999}
                      thumbnail={data[0]["image_large"]}
                    />
                  </div>
                  <div className={`${styles.item} mb-4`} draggable>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      isLocked={false}
                      text={"Краторная булка N-200i (низ)"}
                      price={9999}
                      thumbnail={data[0]["image_large"]}
                    />
                  </div>
                  <div
                    className={`${styles.item} mb-4`}
                    // style={{ opacity }}
                    draggable
                  >
                    <DragIcon type="primary" />
                    <ConstructorElement
                      isLocked={false}
                      text={"Краторная булка N-200i (низ)"}
                      price={9999}
                      thumbnail={data[0]["image_large"]}
                      // handleClose={() => deleteIngredient(item)}
                    />
                  </div>
                  <div className={`${styles.item} mb-4`} draggable>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      isLocked={false}
                      text={"Краторная булка N-200i (низ)"}
                      price={9999}
                      thumbnail={data[0]["image_large"]}
                    />
                  </div>
                </>
              }
            </div>
          }
          {
            <div className={`${styles.item}  pl-8 mb-4 pr-4`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={"Краторная булка N-200i (низ)"}
                price={9999}
                thumbnail={data[0]["image_large"]}
              />
            </div>
          }
        </div>
        <div className={`${styles.total} mt-10 pr-8`}>
          <span className={`${styles.totalSum} mr-10 text_type_digits-medium`}>
            9999
            <CurrencyIcon type="primary" />
          </span>
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BurgerConstructor;
