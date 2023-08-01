import { Slot, component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import { Link, useNavigate } from "@builder.io/qwik-city";
export default component$(
  ({
    src,
    title,
    subtitle,
    href,
    subtitleHref,
  }: {
    href: string;
    src: string;
    title: string;
    subtitle: string;
    subtitleHref: string;
  }) => {
    const nav = useNavigate();
    return (
      <div onClick$={() => nav(href)} class={styles.card}>
        <img class={styles.img} src={src} loading="lazy" />
        <div class={styles.body}>
          <Link href={subtitleHref} class={styles.subtitle}>
            {subtitle}
          </Link>
          <Link href={href} class={styles.title}>
            {title}
          </Link>
          <Slot />
        </div>
        <div class={styles.footer}>
          <Slot name="footer" />
        </div>
      </div>
    );
  }
);
