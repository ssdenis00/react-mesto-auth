function Login() {
  return (
    <>
      <main className="main">
        <section className="authorization authorization_type_login page__content">
          <h1 className="authorization__title">Вход</h1>
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
              Войти
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
