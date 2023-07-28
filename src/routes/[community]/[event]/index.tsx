import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchEvents } from "~/app/api";

export const useInitialRecentDataLoder = routeLoader$(
  async ({ status,params }): Promise<EventApiResponse | null> => {
    const eventsResponse = await fetchEvents({
      page: 1,
      group_slug: params.community,
      status: 'Recurrent',
    });
    if (!eventsResponse) {
      status(404);
      return null;
    }

    return eventsResponse;
  }
);

export default component$(() => {
  const upcomingEvents = useInitialRecentDataLoder();
  if(!upcomingEvents.value) {
    return <>not found</>
  }
  return (
    <div>
      {upcomingEvents.value.records.map(event => <div class="card">
        {event.name}
      </div>)}
    </div>
  );
});
