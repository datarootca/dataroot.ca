
import { component$ } from "@builder.io/qwik";``
import styles from "./index.module.css";
import { Link } from "@builder.io/qwik-city";
export default component$(
  () => {
    return (
        <section class={styles.page_404}>
        <div class={styles.wrapper}>
          <div class={styles.row}> 
            <div class={styles.col}>
            <div class={styles.four_zero_four_bg}>
            <h1 class={styles.text_center }>404</h1>
          </div>
          
          <div class={styles.contant_box_404}>
          <h3 class={styles.h2}>
          Page not found
          </h3>
          
          <p>Sorry, we couldn't find the page you’re after</p>
          
          <Link href="/" class={styles.link_404}>Take me home, country roads</Link>
        </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
