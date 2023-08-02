import { component$ } from "@builder.io/qwik";
``;
import styles from "./index.module.css";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <section class={styles.page_404}>
      <div class={styles.wrapper}>
        <div class={styles.row}>
          <div class={styles.col}>
            <div class={styles.four_zero_four_bg}>
              <h1 class={styles.text_center}>No events</h1>
            </div>

            <div class={styles.contant_box_404}>
              <p>Sorry, we couldn't find any events</p>
              <Link href="/events" class={styles.link_404}>
                Take me back to events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
