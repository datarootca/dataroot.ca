import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "../index.module.css";

import List from "~/components/list";
import NotFound from "~/components/notfound";
import { fetchCityBySlug, fetchGroups } from "~/app/api";
import GroupCard from "~/components/GroupCard";

export const useGroupsLoader = routeLoader$(
  async ({
    status,
    params,
  }): Promise<{
    city: ICity | null;
    items: IGroup[];
  }> => {
    console.log(params.city);
    const cityItem = await fetchCityBySlug(params.city);
    if (!cityItem) {
      status(404);
      return {
        city: null,
        items: [],
      };
    }

    const groupItems = await fetchGroups(1, cityItem.slug);

    return {
      city: cityItem,
      items: groupItems.records,
    };
  }
);
export default component$(() => {
  const groupSignal = useGroupsLoader();
  if (!groupSignal.value.city) {
    return <NotFound />;
  }
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Groups</h2>
          <div class={styles.city}>in {groupSignal.value.city.name}</div>
        </div>

        <List>
          {groupSignal.value.items.map((group) => (
            <GroupCard key={group.group_slug} item={group} />
          ))}
        </List>
      </section>
    </>
  );
});
