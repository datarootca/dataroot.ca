import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(({
  label,
  value,
  onInputChange
}: {
  label: string
  value: boolean,
  onInputChange: any,
}) => {
  return (
    <div class={styles.holder}>
      <input type="checkbox" checked={value} id={label} class={styles.input} onInput$={onInputChange}/>
      <label for={label} class={styles.wrapper}>
          <div class={styles.box}>
              <div class={styles.inner}>{label}</div>
          </div>
      </label>
      
      </div>
  );
});
