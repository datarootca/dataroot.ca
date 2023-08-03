import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchDetailedEvent } from "~/app/api";
import styles from "./index.module.css";
import Location from "~/components/Icons/Location";
import Badge from "~/components/Badge";
export const useInitialEventLoader = routeLoader$(
  async ({ status, params }): Promise<IEvent | null> => {
   try {
    const eventsResponse = await fetchDetailedEvent(Number(params.eventid));
    if (!eventsResponse) {
      status(404);
      return null;
    }

    return eventsResponse;
   } catch(error) {
    return null;
   }
  }
);

export default component$(() => {
  const event = useInitialEventLoader();
  if (!event.value) {
    return <>not found</>;
  }
  return (
    <div>
      <div class={[styles.container]}>
        <div class={[styles.articles]}>
          <aside class={styles.sidebar}>
            <div class={styles.sidebarSlider}>
              <div>
              <svg width="20" height="20" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"></path></svg>
                {event.value.time}-
                {event.value.time}
                <button>
                add to calendar
                </button>
                </div>
              <div><Location />{event.value.location}</div>
              <div>Duration {event.value.duration}</div>
              <div>Host {event.value.host}</div>
              <div>Speaker {event.value.speaker}</div>
              <div>Rsvp {event.value.yes_rsvp_count}/{event.value.rsvp_limit}</div>
              <div>Agenda</div>
              <p>
                {event.value.agenda}
              </p>
            </div>
          </aside>
          <div class={styles.content}>
            <h2>{event.value.name}</h2>
            <p>{event.value.description}</p>
            <div class={styles.cardWrapper}>
        <h3>Related category</h3>
        <section class={styles.relatedCategory}>
          <Badge>Career Network</Badge>
          <Badge>Career Network</Badge>
          <Badge>Career Network</Badge>
          <Badge>Career Network</Badge>
          <Badge>Career Network</Badge>
        </section>
      </div>
          </div>
     
        </div>
      </div>
    </div>
  );
});
