import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import { Link } from "@builder.io/qwik-city";

import db from "../../database";

const province = [
  {
    name: "Alberta",
    slug: "ab",
  },
  {
    name: "British Columbia",
    slug: "bc",
  },
  {
    name: "Manitoba",
    slug: "mb",
  },
  {
    name: "New Brunswick",
    slug: "nb",
  },
  {
    name: "Newfoundland and Labrador",
    slug: "nl",
  },
  {
    name: "Nova Scotia",
    slug: "ns",
  },
  {
    name: "Ontario",
    slug: "on",
  },
  {
    name: "Prince Edward Island",
    slug: "pe",
  },
  {
    name: "Quebec",
    slug: "qc",
  },
  {
    name: "Saskatchewan",
    slug: "sk",
  },
];

export interface ICity {
  cityid?: number;
  name: string;
  slug: string;
  bg: string;
  group_count?: number;
  upcoming_event?: number;
  past_event?: number;
}

interface IProvince {
  name: string;
  slug: string;
}

export const useProvinceLoader = routeLoader$(
  async ({
    params,
    status,
  }): Promise<{
    cityItems: ICity[];
    province: IProvince;
  } | null> => {
    // Example database call using the id param
    // The database could return null if the product is not found
    const index = province.findIndex((p) => p.slug === params.province);

    if (index === -1) {
      // Product data was not found
      // Set the status code to 404
      status(404);
      return null;
    }

    // return the data (which may be null)

    const cityItems = await db.query<ICity>(
      `
        SELECT
            c.name,
            c.slug,
            c.bg,
            count(g.groupid) as group_count,
            count(e.eventid) as upcoming_event,
            count(e.eventid) as past_event
        FROM
            city c
        LEFT JOIN "group" g ON g.cityid = c.cityid
        LEFT JOIN "event" e ON e.groupid = g.groupid
        WHERE EXISTS (
            select 1 from state where symbol = $1::text and stateid = c.stateid 
        )
        GROUP BY c.name,c.slug,c.bg
    `,
      [province[index].slug]
    );
    return {
      province: province[index],
      cityItems: cityItems.rows,
    };
  }
);

export default component$(() => {
  const signal = useProvinceLoader();
  if (!signal.value) {
    return <p>Sorry, looks like province doesnt exists.</p>;
  }
  const { province, cityItems } = signal.value;

  return (
    <>
      <h2 class="hero">{province.name}</h2>
      <div class={styles.content}>
        {cityItems.map((c, index) => {
          return (
            <>
              <div key={index} style={{ "--bg": c.bg }} class={styles.card}>
                <Link href={c.slug}>
                  <h2>{c.name}</h2>
                </Link>
                <div class={styles.cardHeader}>
                  <div>
                    <div>Upcoming events</div>
                    <h3>{c.upcoming_event}</h3>
                  </div>
                  <div>
                    <div>Groups</div>
                    <h3>{c.group_count}</h3>
                  </div>

                  <div>
                    <div>Past events</div>
                    <h3>{c.past_event}</h3>
                  </div>
                </div>
                {/*<picture>
                            <img  src={'/img/' + p.img} alt={p.name} class={styles.img}/>
                            </picture>*/}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
});
