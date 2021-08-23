import { NavLink } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";

function Register() {
  return (
    <>
      <InfoTooltip />
      <main className="main">
        <section className="authorization page__content">
          <h1 className="authorization__title">Регистрация</h1>
          <form action="/" className="authorization__form">
            <div className="authorization__inputs">
              <input
                type="email"
                className="authorization__input"
                placeholder="Email"
              />
              <input
                type="password"
                className="authorization__input"
                placeholder="Пароль"
              />
            </div>
            <button type="submit" className="authorization__btn">
              Зарегистрироваться
            </button>
          </form>
          <NavLink to="/sing-in" className="authorization__link">
            Уже зарегистрированы? Войти
          </NavLink>
        </section>
      </main>
    </>
  );
}

export default Register;
