import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "../index.module.css";

import Card from "~/components/card";
import List from "~/components/list";
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
    console.log(cityItem);
    if (!cityItem) {
      status(404);
      return {
        city: null,
        items: [],
      };
    }
    //  `SELECT g.name,g.members,g.slug,g.photo_link as img,g.organizer,g.groupid,c.slug AS cityslug,c.name AS cityname,s.symbol AS statesymbol FROM"group" g LEFT JOIN city c USING(cityid)LEFT JOIN state s USING(stateid)`
    //  + `where g.cityid = $1::bigint`,

    //`SELECT e.groupid,count(e.eventid)AS event_count FROM"event" e WHERE e.groupid in(${groupQuery.rows
    //  .map((g) => g.groupid)
    //  .join(",")}) AND time>=now()GROUP BY e.groupid`
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
    return <>not found</>;
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
