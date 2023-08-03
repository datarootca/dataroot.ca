import { component$ } from "@builder.io/qwik";
import Card from "../card";
export default component$(({ item: event }: { item: IEvent }) => {
  return (
    <Card
      title={event.name}
      subtitle={event.time}
      href={`/${event.group_slug}/events/${event.eventid}`}
      subtitleHref={""}
      src={event.highres_link || "not found image"}
    >
      {event.location}
      <div q:slot="footer">
        <div>
          {event.yes_rsvp_count} going · {event.rsvp_limit} rsvp
        </div>
        <div>
          {event.is_online ? "online" : ""}
          {event.in_person ? (event.is_online ? " · " : "") + "person" : ""}
        </div>
      </div>
    </Card>
  );
});
