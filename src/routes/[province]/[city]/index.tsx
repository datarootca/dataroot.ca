import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import { Link } from "@builder.io/qwik-city";
import db from "../../../database";
import { type ICity } from "../index";
export interface IGroup {
  name: string;
  description: string;
  upcoming_event: number;
  pasts_event: number;
  members: number;
  bg: string;
  slug: string;
}

export const useCityLoader = routeLoader$(async ({ params, status }) => {
  const cityQuery = await db.query<ICity>(
    "select cityid,name from city where slug = $1::text",
    [params.city]
  );
  const cityItem = cityQuery.rows[0];
  if (!cityItem) {
    status(404);
    return null;
  }

  const groupQuery = await db.query<IGroup>(
    "SELECT g.name,g.slug,g.bg," +
      "count(e.eventid) as upcoming_event," +
      "count(e.eventid) as pasts_event," +
      "g.members " +
      'FROM "group" g ' +
      'LEFT JOIN "event" e ON e.groupid = g.groupid ' +
      "WHERE g.cityid = $1::int " +
      "GROUP BY g.name,g.slug,g.bg,g.members",
    [cityItem.cityid]
  );

  return {
    cityItem,
    groupItems: groupQuery.rows,
  };
});

export default component$(() => {
  const { value } = useCityLoader();
  if (!value) {
    return <p>Sorry, looks like city doesnt exists.</p>;
  }
  const { cityItem, groupItems } = value;
  return (
    <>
      <h2 class="hero">{cityItem.name}</h2>
      <div class={styles.content}>
        {groupItems && groupItems.length !== 0
          ? groupItems.map((com, i) => {
              return (
                <div key={i} style={{ "--bg": com.bg }} class={styles.card}>
                  <Link href={com.slug}>
                    <h2>{com.name}</h2>
                  </Link>
                  <div>{com.description}</div>
                  <div class={styles.cardHeader}>
                    <div>
                      <div>Upcoming events</div>
                      <h3>{com.upcoming_event || 0}</h3>
                    </div>
                    <div>
                      <div>Members</div>
                      <h3>{com.members || 0}</h3>
                    </div>

                    <div>
                      <div>Past events</div>
                      <h3>{com.pasts_event || 0}</h3>
                    </div>
                  </div>
                  <div>
                    <button>sources</button>
                    <button>sources</button>
                    <button>sources</button>
                    <button>sources</button>
                  </div>
                  <div>
                    <button>#tags</button>
                    <button>#tags</button>
                    <button>#tags</button>
                    <button>#tags</button>
                  </div>

                  {/*<picture>
                            <img  src={'/img/' + p.img} alt={p.name} class={styles.img}/>
                            </picture>*/}
                </div>
              );
            })
          : "City doesnt have community"}
      </div>
    </>
  );
});
