import styles from "./TextBox.module.css";

export default function TextBox({ onClick, children }) {
    return (
        <div
            className={styles.textbox}
            onClick={onClick}>
            {children}
        </div>
    );
}
