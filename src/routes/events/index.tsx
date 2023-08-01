import { component$, $, useStore, useVisibleTask$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import styles from "./index.module.css";
import Card from "~/components/card";
import { routeLoader$ } from "@builder.io/qwik-city";
import List from "~/components/list";
import Spinner from "~/components/spinner";
import { fetchEvents } from "~/app/api";
import type { URLSearchParams } from "url";

function initializeFilter(
  searchParams: URLSearchParams
): RequestFindEventFilter {
  const filter: Partial<RequestFindEventFilter> = {};

  searchParams.forEach((value, key) => {
    switch (key) {
      case "in_person":
      case "is_online":
        filter[key] = "true" === value;
        break;
      case "rsvp_limit":
      case "page":
      case "page_size":
        filter[key as keyof RequestFindEventFilter] = Number(value);
        break;
      case "start_date":
      case "end_date":
        filter[key as keyof RequestFindEventFilter] = new Date(value);
        break;
      default:
        filter[key as keyof RequestFindEventFilter] = value;
    }
  });
  return filter as RequestFindEventFilter;
}

const handleRetrivingEvents = $((searchParams: URLSearchParams, page = 1) => {
  const filter = initializeFilter(searchParams);
  filter.page = page;
  return fetchEvents(filter);
});
export const useInitialDataLoader = routeLoader$(
  async ({ url }): Promise<EventApiResponse | null> => {
    return handleRetrivingEvents(url.searchParams);
  }
);
export const changePageWithoutReload = $(
  async (filter: RequestFindEventFilter) => {
    console.log(filter);
    const query = [];
    if (filter.in_person) {
      query.push(`in=person`);
    }
    if (filter.is_online) {
      query.push(`type=online`);
    }
    if (filter.name) {
      query.push(`q=${filter.name}`);
    }
    if (filter.has_fee !== undefined) {
      query.push(`has_fee=${filter.has_fee}`);
    }
    if (filter.location) {
      query.push(`location=${filter.location}`);
    }
    window.history.pushState(
      "",
      "",
      `${window.location.origin}${window.location.pathname}?${query.join("&")}`
    );
  }
);

export default component$(() => {
  const initialData = useInitialDataLoader();
  const state = useStore<{
    filter: RequestFindEventFilter;
    items: IEvent[];
    loadingMore: boolean;
  }>({
    items: initialData.value?.records ?? [],
    loadingMore: false,
    filter: {},
  });
  state;
  useVisibleTask$(({ cleanup }) => {
    const nearBottom = async () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !state.loadingMore
      ) {
        state.loadingMore = true;

        const newEvents = await fetchEvents(state.filter);

        if (!newEvents && newEvents.records?.length === 0) {
          window.removeEventListener("scroll", nearBottom);
          state.loadingMore = false;
          return;
        }

        state.items.push(...newEvents.records);

        // small timeout to prevent multiple requests
        setTimeout(() => (state.loadingMore = false), 500);
      }
    };

    window.addEventListener("scroll", nearBottom);

    cleanup(() => window.removeEventListener("scroll", nearBottom));
  });
  const onPersonChange = $(async () => {
    state.filter.in_person = !state.filter.in_person;
    changePageWithoutReload(state.filter);
  });
  const onOnlineChange = $(async () => {
    state.filter.is_online = !state.filter.is_online;
    changePageWithoutReload(state.filter);
  });
  const onFeeChange = $(async () => {
    state.filter.has_fee = !state.filter.has_fee;
    changePageWithoutReload(state.filter);
  });
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Events</h2>
        </div>
        <div class={stylus.search}>
          <div class={stylus.searchInput}>
            <input
              placeholder="search"
              type="text"
              onInput$={(ev) =>
                (state.filter.search = (ev.target as HTMLInputElement).value)
              }
            />
          </div>
          <div class={stylus.locationInput}>
            <input
              type="texst"
              placeholder="location"
              onInput$={(ev) =>
                (state.filter.location = (ev.target as HTMLInputElement).value)
              }
            />
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
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 10.5C16.5 13.8137 13.8137 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5ZM18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5ZM16.4697 17.5303L15.9568 17.0174C16.3407 16.6957 16.6957 16.3407 17.0174 15.9568L17.5303 16.4697L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.4697 17.5303Z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <button onClick$={onPersonChange}>
            inPerson {state.filter.is_online}
          </button>
          <button onClick$={onOnlineChange}>Online</button>
          <button onClick$={onFeeChange}>Fee</button>
          <select onClick$={onFeeChange}>
            <option value="Today">Today</option>
            <option value="ThisWeek">this week</option>
            <option value="ThisMonth">this month</option>
            <option value="Custom">Upcoming</option>
          </select>
        </div>
      </section>
      <section class="container">
        <div>test</div>
        <List>
          {state.items.map((event) => (
            <Card
              key={event.eventid}
              title={event.name}
              subtitle={event.time}
              href={`/${event.group_slug}/events/${event.eventid}`}
              subtitleHref={""}
              src={event.highres_link}
            >
              {event.location}
              <div q:slot="footer">
                <div>
                  {event.yes_rsvp_count} going · {event.rsvp_limit} rsvp
                </div>
                <div>
                  {event.is_online ? "online" : ""}
                  {event.in_person
                    ? (event.is_online ? " · " : "") + "person"
                    : ""}
                </div>
              </div>
            </Card>
          ))}
          {state.loadingMore ? (
            <div class="mt-14">
              <Spinner />
            </div>
          ) : (
            <div class="mt-14 h-2 w-2 self-center rounded-full bg-stone-200 dark:bg-slate-600" />
          )}
        </List>
      </section>
    </>
  );
});
