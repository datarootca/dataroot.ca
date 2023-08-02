import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchDetailedEvent } from "~/app/api";
import styles from './index.module.css'
export const useInitialEventLoader = routeLoader$(
  async ({ status, params }): Promise<IEvent | null> => {
    const eventsResponse = await fetchDetailedEvent(Number(params.eventid));
    if (!eventsResponse) {
      status(404);
      return null;
    }

    return eventsResponse;
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
         <h3>Date and time</h3>
         <h3>Location</h3>
         <h3>Duration</h3>
         <h3>Speaker</h3>
         <h3>Host</h3>
         <h3>Rsvp</h3>
         <h3>Agenda</h3>
            <p>
              The data community is a vibrant and dynamic ecosystem that
              encompasses professionals, enthusiasts, and organizations involved
              in various aspects of data management, analysis, and utilization.
            </p>
         </div>
       </aside>
      <div class={styles.content}>
      <h2>{event.value.name}</h2>
      {event.value.description}
      </div>
    </div>
    </div>
    </div>
  );
});
