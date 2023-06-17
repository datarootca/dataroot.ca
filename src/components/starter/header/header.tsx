import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            data logo
          </a>
        </div>
        <ul>
          <li>
            <a href="/community" target="_self">
              Community
            </a>
          </li>
          <li>
            <a href="/events" target="_self">
              Events
            </a>
          </li>
          <li>
            <a href="/articles" target="_self">
              Articles
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
