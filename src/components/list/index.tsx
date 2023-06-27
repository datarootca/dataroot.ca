import { Slot, component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class={styles.list}>
      <Slot />
    </div>
  );
});
