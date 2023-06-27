import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import Card from '~/components/card'
import List from '~/components/list'
import db from "../../database";
export interface IGroup {
  name: string;
  slug: string;
  img: string;
  members: number;
  cityname: string;
  cityslug: string;
  statesymbol: string;
  organizer: string;
  event_count: number;
}
export const useGroupsLoader = routeLoader$(async (): Promise<IGroup[]> => {
  const groupQuery = await db.query<IGroup>(
    `SELECT g.name,g.members,g.slug,g.img,g.organizer,c.slug as cityslug,c.name AS cityname,s.symbol AS statesymbol,count(e.eventid)AS event_count FROM"group" g LEFT JOIN city c USING(cityid)LEFT JOIN state s USING(stateid)LEFT JOIN event e USING(groupid)GROUP BY g.name,g.members,g.slug,g.img,g.organizer,c.slug,c.name,s.symbol`
  );

  return groupQuery.rows;
});
export default component$(() => {
  const groupItems = useGroupsLoader();
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Groups</h2>
          <div>in {"Vancouver"}</div>
        </div>

        <List>
          {groupItems.value.map((group, index) => {
            return (
              <Card
                key={index}
                src={group.img}
                href={"/" + group.slug}
                subtitle={`${group.cityname},${group.statesymbol.toUpperCase()}`}
                subtitleHref={group.cityslug}
                title={group.name}
              >
                  <h3 class={styles.author}>{group.organizer}</h3>
                  <div q:slot='footer'>
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
