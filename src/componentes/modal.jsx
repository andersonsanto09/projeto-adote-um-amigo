function Modal({open, onClose, title, children}) {
    if (!open) return null;

    return (
        <div className="container-modal">
            <div>
                <h3>{title}</h3>

                {children}

                <button className="button-modal" onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal



