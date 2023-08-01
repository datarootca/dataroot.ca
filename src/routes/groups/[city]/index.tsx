import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "../index.module.css";

import Card from "~/components/card";
import List from "~/components/list";
import NotFound from "~/components/notfound";
import { fetchCityBySlug, fetchGroups } from "~/app/api";

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
          {groupSignal.value.items.map((group, index) => {
            return (
              <Card
                key={index}
                src={group.group_highres_link}
                href={"/" + group.group_slug}
                subtitle={`${
                  group.city_name
                },${group.state_symbol.toUpperCase()}`}
                subtitleHref={"/groups/" + group.city_slug}
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
