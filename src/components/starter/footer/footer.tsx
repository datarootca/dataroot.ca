import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
          <span>Made by @tkudlicka in Beautifuel British Columbia</span>
          <span class={styles.spacer}>|</span>
        </a>
      </div>
    </footer>
  );
});
