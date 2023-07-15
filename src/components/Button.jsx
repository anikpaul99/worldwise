import styles from "./Button.module.css";

/**
 * Button component
 * @prop {func} onClick handler function, which is to be executed when clicked on a button
 * @prop {string} type (classname) the type of the button to be shown ("primary", "position")
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
