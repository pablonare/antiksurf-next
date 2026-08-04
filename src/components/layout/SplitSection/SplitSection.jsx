import styles from "./SplitSection.module.css";

function SplitSection({ children, reverse = false }) {
  return (
    <div className={`${styles.layout} ${reverse ? styles.reverse : ""}`}>
      {children}
    </div>
  );
}

export default SplitSection;