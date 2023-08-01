import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchDetailedEvent } from "~/app/api";

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
      {event.value.name}
      {event.value.description}
    </div>
  );
});
