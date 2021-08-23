import { NavLink, Route, Switch } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.svg";

function Header() {
  const [stateLoginInfo, setStateLoginInfo] = useState(false);

  const handleToggleSandwitchBtn = () => {
    setStateLoginInfo((state) => {
      return !state;
    });
  };

  return (
    <>
      <Route exact path="/">
        <div
          className={`login-info ${stateLoginInfo ? "login-info_active" : ""}`}
        >
          <p className="login-info__email">email@mail.com</p>
          <NavLink className="login-info__link" to="/sing-in">
            Выйти
          </NavLink>
        </div>
      </Route>
      <header className="header page__content">
        <img src={logo} alt="Логотип" className="header__logo" />
        <Switch>
          <Route exact path="/">
            <button
              type="button"
              onClick={handleToggleSandwitchBtn}
              aria-label="открыть настройки аутенфикации"
              className={`header__sandwitch-btn ${
                stateLoginInfo ? "header__sandwith-btn_active" : ""
              }`}
            ></button>
          </Route>
          <Route path="/sing-up">
            <NavLink className="header__link" to="/sing-in">
              Войти
            </NavLink>
          </Route>
          <Route path="/sing-in">
            <NavLink className="header__link" to="/sing-up">
              Регистрация
            </NavLink>
          </Route>
        </Switch>
      </header>
    </>
  );
}

export default Header;
