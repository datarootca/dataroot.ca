import { component$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import styles from "./index.module.css";
import db from "../../database";
import Card from "~/components/card";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import List from "~/components/list";
export interface IEvent {
  eventid: number;
  name: string;
  group_slug: string;
  group_name: string;
  in_person: boolean;
  location: string;
  is_online: boolean;
  img: string;
  link: string;
  yes_rsvp_count: number;
  publish_at: string;
  highres_link: string;
  rsvp_limit: string;
  time: Date,
}
export const useEventLoader = routeLoader$(async (): Promise<IEvent[]> => {
  const eventQuery = await db.query<IEvent>(
    `select e.eventid,e."time",COALESCE(e.highres_link,g.highres_link) as highres_link,e.name,g.name as group_name,g.slug as group_slug,e.in_person,e.location,e.is_online,e.link,e.yes_rsvp_count,e.rsvp_limit FROM event e
join "group" g using(groupid)`
  );
  return eventQuery.rows;
});
export default component$(() => {
    const eventItems = useEventLoader();
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Events</h2>
        </div>
        <div class={stylus.search}>
          <div class={stylus.searchInput}>
            <input placeholder="search" type="text" />
          </div>
          <div class={stylus.locationInput}>
            <input type="texst" placeholder="location" />
          </div>
          <button class={styles.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="injected-svg text-white fill-current"
              data-src="https://secure.meetupstatic.com/next/images/design-system-icons/search-outline.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="width:20px;height:20px;width:20px;height:20px"
              data-icon="icon-7"
            >
              <title>icon</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 10.5C16.5 13.8137 13.8137 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5ZM18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5ZM16.4697 17.5303L15.9568 17.0174C16.3407 16.6957 16.6957 16.3407 17.0174 15.9568L17.5303 16.4697L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.4697 17.5303Z"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <section class="container">
        <List>
          {eventItems.value.map((event,index) => (

          <Card
          key={index}
            title={event.name}
            subtitle={event.time.toUTCString()}
            href={event.link}
            src={event.highres_link}
          >
          {event.location}
            <div q:slot="footer">
              <div>{event.yes_rsvp_count} going · {event.rsvp_limit} rsvp</div>
              <div>{event.is_online ? 'online'  :''}{event.in_person ? (event.is_online ? ' · ' : '') + 'person' : ''}</div>
            </div>
          </Card>
          ))}
        </List>
      </section>
    </>
  );
});
