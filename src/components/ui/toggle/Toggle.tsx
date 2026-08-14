import styles from "./Toggle.module.css";

type ToggleProps = {
  title: string;
  children: React.ReactNode;
};

export default function Toggle({
  title,
  children,
}: ToggleProps) {
  return (
    <details className={styles.toggle}>
      <summary className={styles.header}>
        <h2 className="section-title">{title}</h2>
        <span className={styles.icon} />
      </summary>

      <div className={styles.content}>
        {children}
      </div>
    </details>
  );
}