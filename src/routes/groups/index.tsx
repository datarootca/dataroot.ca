import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import List from "~/components/list";
import { fetchGroups } from "~/app/api";
import GroupCard from "~/components/GroupCard";

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
              <GroupCard key={group.group_slug} item={group} />
            );
          })}
        </List>
      </section>
    </>
  );
});
