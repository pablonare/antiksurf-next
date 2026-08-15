import styles from "./SplitSection.module.css";

function SplitSection({
  children,
  reverse = false,
  mobileReverse = false,
}) {
  return (
    <div
      className={`
        ${styles.layout}
        ${reverse ? styles.reverse : ""}
        ${mobileReverse ? styles.mobileReverse : ""}
      `}
    >
      {children}
    </div>
  );
}

export default SplitSection;