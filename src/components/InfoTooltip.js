function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_visible-on" : ""}`}>
      <div className="popup__container popup__container_type_info ">
        <button
          className={`popup__cross`}
          type="button"
          aria-label="закрыть всплывающее окно"
          onClick={props.onClose}
        ></button>
        <div className="popup__info-tooltip"></div>
        <h2 className="popup__title">{props.title}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
