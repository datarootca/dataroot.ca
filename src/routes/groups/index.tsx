import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import Card from "~/components/card";
import List from "~/components/list";
import { fetchGroups } from "~/app/api";

export const useGroupsLoader = routeLoader$(async () => {
  return await fetchGroups(1);
});
export default component$(() => {
  const groupItems = useGroupsLoader();
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Groups</h2>
        </div>

        <List>
          {groupItems.value.records.map((group) => {
            return (
              <Card
                key={group.group_slug}
                src={group.group_highres_link}
                href={"/" + group.group_slug}
                subtitle={`${
                  group.city_name
                },${group.state_symbol.toUpperCase()}`}
                subtitleHref={group.city_slug}
                title={group.group_name}
              >
                <h3 class={styles.author}>{group.organizer}</h3>
                <div q:slot="footer">
                  <span>{group.event_count} upcoming events</span> ·
                  <span>{group.members} members</span>
                </div>
              </Card>
            );
          })}
        </List>
      </section>
    </>
  );
});
