import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import Card from "~/components/card";
import List from "~/components/list";
import db from "../../database";
export interface IGroup {
  groupid: number;
  name: string;
  slug: string;
  img: string;
  members: number;
  cityname: string;
  cityslug: string;
  statesymbol: string;
  organizer: string;
  event_count?: number;
}
export const useGroupsLoader = routeLoader$(async (): Promise<IGroup[]> => {
  const groupQuery = await db.query<IGroup>(
    `SELECT g.name,g.members,g.slug,g.photo_link as img,g.organizer,g.groupid,c.slug AS cityslug,c.name AS cityname,s.symbol AS statesymbol FROM"group" g LEFT JOIN city c USING(cityid)LEFT JOIN state s USING(stateid)`
  );

  const eventQuery = await db.query<{
    groupid: number;
    event_count: number;
  }>(
    `SELECT e.groupid,count(e.eventid)AS event_count FROM"event" e WHERE e.groupid in(${groupQuery.rows
      .map((g) => g.groupid)
      .join(",")}) AND time>=now()GROUP BY e.groupid`
  );
  groupQuery.rows.forEach((group) => {
    const index = eventQuery.rows.findIndex(
      (count) => count.groupid === group.groupid
    );
    group.event_count = index !== -1 ? eventQuery.rows[index].event_count : 0;
  });

  return groupQuery.rows;
});
export default component$(() => {
  const groupItems = useGroupsLoader();
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Groups</h2>
          <div class={styles.city}>in {"Vancouver"}</div>
        </div>

        <List>
          {groupItems.value.map((group, index) => {
            return (
              <Card
                key={index}
                src={group.img}
                href={"/" + group.slug}
                subtitle={`${
                  group.cityname
                },${group.statesymbol.toUpperCase()}`}
                subtitleHref={group.cityslug}
                title={group.name}
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
