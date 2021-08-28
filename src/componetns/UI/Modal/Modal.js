import styles from './Modal.module.scss';
import classNameToString from "../../../utils/classNameToString";

const Modal = ({
    isVisible = true,
    setModal,
    children,

}) => {
    const classes = classNameToString(
        styles.modal,
        isVisible && styles.active,

    );

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className={classes}
             onClick={closeModal}>
            <div className={styles.modal__content}
                 onClick={(e) => e.stopPropagation(e)}>
                {children}
            </div>
        </div>
    )
}

export default Modal;