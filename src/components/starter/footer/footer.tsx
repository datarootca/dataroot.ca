import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <div class={styles.copyright}>
          <small class={styles.small}>
              © 2023 <a href="https://www.github.com/tkudlicka">@tkudlicka</a>. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
});
