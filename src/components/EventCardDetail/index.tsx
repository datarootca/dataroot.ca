import { type Signal, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import NoEvent from "~/components/NoEvent";
import stylus from "./index.module.css";
import { getSourceIcon, useInitialDataLoder } from "~/routes/[community]/layout";

export default component$(
  ({ events }: { events: Signal<EventApiResponse | null> }) => {
    const { value: group } = useInitialDataLoder();
    const location = useLocation();
    const currentLocation = location.url.pathname;
    const items = [
      {
        name: "Upcoming",
        path: `/${group?.slug}/events/`,
      },
      {
        name: "Reccuring",
        path: `/${group?.slug}/events/reccuring/`,
      },
      {
        name: "Past",
        path: `/${group?.slug}/events/past/`,
      },
    ];
    return (
      <div>
        <div class={[stylus.container]}>
          <div class={[stylus.articles]}>
            <aside class={stylus.sidebar}>
              <div class={stylus.sidebarSlider}>
                <ul class={stylus.menu}>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      class={currentLocation === item.path ? stylus.active : ""}
                    >
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <section class={stylus.content}>
              {!events.value ? (
                <NoEvent />
              ) : (
                events.value.records.map((event, index) => (
                  <div key={index} class={stylus.article}>
                    <div class={stylus.articleContainer}>
                      <div class={stylus.header}>
                        <div class={stylus.source}>
                          {getSourceIcon(event.host ?? 'meetup')}
                        </div>
                        <h4 class={stylus.author}>{event.host}</h4>
                      </div>
                      <Link
                        class={stylus.link}
                        href={`/${event.group_slug}/events/${event.eventid}`}
                      >
                        <h2>{event.name}</h2>
                        <h3 class={stylus.description}>{event.description}</h3>
                      </Link>
                      <div class={stylus.footer}>
                          <span>
                            {new Date(event.time).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          {event.location ? <span>{event.location}</span> : ""}
                          {event.in_person ? <span>Physical</span> : ""}
                          {event.is_online ? <span>Online</span> : ""}
                          {event.duration ? <span>{event.duration}h</span> : ""}
                          <a class={stylus.eventLink} href={event.link} target="_blank">Visit event</a>
                        </div>
                    </div>
                    <div class={stylus.img}>
                      <img
                        class={stylus.img}
                        loading="lazy"
                        width={200}
                        height={134}
                        src={event.highres_link || ""}
                        alt={"Image"}
                      />
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
);
