import { NavLink, Route, Switch } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.svg";

function Header({ onExit, email }) {
  const [stateLoginInfo, setStateLoginInfo] = useState(false);

  const handleToggleSandwitchBtn = () => {
    setStateLoginInfo((state) => {
      return !state;
    });
  };

  const handleExitClick = () => {
    onExit();
    setStateLoginInfo(false);
  };

  return (
    <>
      <Route exact path="/">
        <div
          className={`login-info ${stateLoginInfo ? "login-info_active" : ""}`}
        >
          <p className="login-info__email">{email}</p>
          <NavLink
            onClick={handleExitClick}
            className="login-info__link"
            to="/sign-in"
          >
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

            <div className="login-info login-info_type_desktop">
              <p className="login-info__email login-info__email_type_desktop">
                {email}
              </p>
              <NavLink
                onClick={handleExitClick}
                className="login-info__link login-info__link_type_desktop"
                to="/sign-in"
              >
                Выйти
              </NavLink>
            </div>
          </Route>
          <Route path="/sign-up">
            <NavLink className="header__link" to="/sign-in">
              Войти
            </NavLink>
          </Route>
          <Route path="/sign-in">
            <NavLink className="header__link" to="/sign-up">
              Регистрация
            </NavLink>
          </Route>
        </Switch>
      </header>
    </>
  );
}

export default Header;
