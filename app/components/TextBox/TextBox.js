import styles from "./TextBox.module.css";

export default function TextBox({ onClick, children, transparent }) {
    return (
        <div
            className={`${styles.textbox} ${transparent ? styles.transparent : ""}`}
            onClick={onClick}>
            {children}
        </div>
    );
}
