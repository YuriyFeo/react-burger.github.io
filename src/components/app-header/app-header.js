import React from "react"; // импорт библиотеки
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appStyles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${appStyles.header} pt-4 pb-4`} href={""}>
      <nav className={appStyles.nav}>
        <a className={`${appStyles.button} pt-4 pr-5 pb-4 pl-5 mr-2`} href={"http://"}>
          <BurgerIcon type="secondary" />
          <span
            className={`${appStyles.button_text} ml-2 text_type_main-default`}
          >
            Конструктор
          </span>
        </a>
        <a className={`${appStyles.button} pt-4 pr-5 pb-4 pl-5 mr-2`} href={"http://"}>
          <ListIcon type="secondary" />
          <span
            className={`${appStyles.button_text} ml-2 text_type_main-default`}
          >
            Лента заказов
          </span>
        </a>
        <a className={appStyles.logo} href={"http://"}>
          <Logo />
        </a>
        <a className={`${appStyles.button} pt-4 pr-5 pb-4 pl-5 mr-2`} href={"http://"}>
          <ProfileIcon type="secondary" />
          <span
            className={`${appStyles.button_text} ml-2 text_type_main-default`}
          >
            Личный кабинет
          </span>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
