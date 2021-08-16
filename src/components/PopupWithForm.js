
function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_visible-on' : ''}`}>
      <div className="popup__container">
        <button className={`popup__cross popup__cross_type_${props.name}`} type="button"
          aria-label="закрыть всплывающее окно" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form action="./index.html" className={`popup__form popup__form_type_${props.name}`} name={props.name} onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button type="submit" className={`popup__btn popup__btn_type_${props.name}`}>Сохранить</button>
        </form>
      </div>
    </div >
  )
}

export default PopupWithForm;