import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchEvents } from "~/app/api";
import EventCardDetail from "~/components/EventCardDetail";
export const useInitialRecentDataLoder = routeLoader$(
  async ({ status, params }): Promise<EventApiResponse | null> => {
    const eventsResponse = await fetchEvents({
      page: 1,
      group_slug: params.community,
      status: "Upcomming",
    });

    if (!eventsResponse) {
      status(404);
      return null;
    }

    return eventsResponse;
  }
);

export default component$(() => {
  const events = useInitialRecentDataLoder();
  return <EventCardDetail events={events} />;
});
