import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { useLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const menu = [
    {
      name: "Community",
      uri: "community",
    },
    {
      name: "Events",
      uri: "events",
    },
    {
      name: "Articles",
      uri: "articles",
    },
  ];
  const currentLocation = location.url.pathname;
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a class="active" href="/" title="qwik">
          Dataroot
        </a>
      </div>
      <ul>
        {menu.map((m, i) => (
          <li key={i}>
            <Link
              class={currentLocation.match(m.uri) ? styles.active : ""}
              href={"/" + m.uri}
              target="_self"
            >
              {m.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
});
