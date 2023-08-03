import { component$, $, useStore, useVisibleTask$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import styles from "./index.module.css";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import List from "~/components/list";
import Spinner from "~/components/spinner";
import { fetchEvents } from "~/app/api";
import type { URLSearchParams } from "url";
import EventCard from "~/components/EventCard";
import Checkbox from "~/components/Checkbox";
import NoEvent from "~/components/NoEvent";

function initializeFilter(
  searchParams: URLSearchParams
): RequestFindEventFilter {
  const filter: RequestFindEventFilter = {};

  searchParams.forEach((value, key) => {
    switch (key) {
      case "in_person":
      case "is_online":
        filter[key] = "true" === value;
        break;
      case "type":
        filter.is_online = "online" === value;
        break;
      case "location":
        filter.location = value;
        break;
      case "q":
        filter.name = value;
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

const handleRetrivingEvents = $((filter: RequestFindEventFilter, page = 1) => {
  filter.page = page;
  return fetchEvents(filter);
});
export const useInitialDataLoader = routeLoader$(
  async ({
    url,
  }): Promise<{
    filter: RequestFindEventFilter;
    response: EventApiResponse | null;
  }> => {
    const filter = initializeFilter(url.searchParams);
    try {
      const response = await handleRetrivingEvents(filter);
      return {
        filter,
        response,
      };
    } catch {
      return {
        filter,
        response: null,
      };
    }
  }
);

export default component$(() => {
  const initialData = useInitialDataLoader();

  const state = useStore<{
    items: IEvent[];
    count: number;
    page: number;
    pages: number;
    filter: RequestFindEventFilter;
    loadingMore: boolean;
  }>({
    filter: initialData.value.filter,
    page: initialData.value?.response?.meta.page ?? 0,
    pages: initialData.value?.response?.meta.pages ?? 0,
    items: initialData.value?.response?.records ?? [],
    count: initialData.value?.response?.meta.count ?? 0,
    loadingMore: false,
  });

  useVisibleTask$(({ cleanup }) => {
    const nearBottom = async () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !state.loadingMore
      ) {
        state.loadingMore = true;
        state.filter.page = state.page + 1;
        const newEvents = await fetchEvents(state.filter);

        if (newEvents?.meta.page === state.filter.pages) {
          window.removeEventListener("scroll", nearBottom);
          state.loadingMore = false;
          return;
        }
        if (newEvents) {
          state.items.push(...newEvents.records);
          state.page = newEvents.meta.page;
          state.pages = newEvents.meta.pages;
        }

        setTimeout(() => (state.loadingMore = false), 500);
      }
    };

    window.addEventListener("scroll", nearBottom);

    cleanup(() => window.removeEventListener("scroll", nearBottom));
  });
  const changePageWithoutReload = $(async (filter: RequestFindEventFilter) => {
    const query = [];
    if (filter.in_person) {
      query.push(`in_person=true`);
    }
    if (filter.is_online) {
      query.push(`type=online`);
    }
    if (filter.name) {
      query.push(`q=${filter.name}`);
    }
    if (filter.fee) {
      query.push(`fee=${filter.fee}`);
    }
    if (filter.location) {
      query.push(`location=${filter.location}`);
    }
    if (filter.time_frame) {
      query.push(`time_frame=${filter.time_frame}`);
    }
    window.history.pushState(
      "",
      "",
      `${window.location.origin}${window.location.pathname}${
        query.length === 0 ? "" : "?" + query.join("&")
      }`
    );
    try {
      const response = await handleRetrivingEvents(filter);
      if (response) {
        state.items = response.records;
        state.count = response.meta.count;
        state.page = response.meta.page;
        state.pages = response.meta.pages;
        return;
      }
      state.items = [];
      state.count = 0;
      state.page = 1;
      state.pages = 1;
    } catch (error) {
      state.items = [];
      state.count = 0;
      state.page = 1;
      state.pages = 1;
    }
  });
  const onPersonChange = $(async () => {
    state.filter.in_person = !state.filter.in_person;
    if (!state.filter.in_person) {
      delete state.filter.in_person;
    }
    changePageWithoutReload(state.filter);
  });
  const onOnlineChange = $(async () => {
    state.filter.is_online = !state.filter.is_online;
    if (!state.filter.is_online) {
      delete state.filter.is_online;
    }
    changePageWithoutReload(state.filter);
  });
  const onFeeChange = $(async () => {
    state.filter.fee = !state.filter.fee;
    if (!state.filter.fee) {
      delete state.filter.fee;
    }
    changePageWithoutReload(state.filter);
  });
  const onDateRangeChange = $(async (value: any) => {
    if (value.target.value !== "Any") {
      state.filter.time_frame = value.target.value;
    } else {
      state.filter.time_frame = undefined;
    }
    changePageWithoutReload(state.filter);
  });
  const handleSearch = $(async () => {
    changePageWithoutReload(state.filter);
  });
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Events</h2>
        </div>
        <div class={stylus.eventListWrapper}>
          <div class={stylus.sidebar}>
            <div class={stylus.sidebarSlider}>
              <div class={stylus.search}>
                <div class={stylus.searchInput}>
                  <input
                    placeholder="Search"
                    value={state.filter.name}
                    type="text"
                    onInput$={(ev) =>
                      (state.filter.name = (
                        ev.target as HTMLInputElement
                      ).value)
                    }
                  />
                </div>
                <div class={stylus.locationInput}>
                  <input
                    type="texst"
                    placeholder="Location"
                    value={state.filter.location}
                    onInput$={(ev) =>
                      (state.filter.location = (
                        ev.target as HTMLInputElement
                      ).value)
                    }
                  />
                </div>
                <button class={styles.searchButton} onClick$={handleSearch}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
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
              <div class={stylus.filters}>
                <Checkbox
                  label={"In person"}
                  value={state.filter.in_person!}
                  onInputChange={onPersonChange}
                />
                <Checkbox
                  label={"Online"}
                  value={state.filter.is_online!}
                  onInputChange={onOnlineChange}
                />
                <Checkbox
                  label={"Fee"}
                  value={state.filter.fee!}
                  onInputChange={onFeeChange}
                />
                <div class="select">
                  <select onChange$={onDateRangeChange}>
                    <option selected={!!state.filter.time_frame} value="Any">
                      Any
                    </option>
                    <option
                      selected={state.filter.time_frame === "Today"}
                      value="Today"
                    >
                      Today
                    </option>
                    <option
                      selected={state.filter.time_frame === "ThisWeek"}
                      value="ThisWeek"
                    >
                      This week
                    </option>
                    <option
                      selected={state.filter.time_frame === "ThisMonth"}
                      value="ThisMonth"
                    >
                      This month
                    </option>
                    {/** <option value="Custom">Custom</option> */}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {state.items.length === 0 ? (
            <NoEvent />
          ) : (
            <List>
              {state.items.map((event) => (
                <EventCard key={event.eventid} item={event} />
              ))}
              {state.loadingMore ? (
                <div class="mt-14">
                  <Spinner />
                </div>
              ) : (
                <div class="mt-14 h-2 w-2 self-center rounded-full bg-stone-200 dark:bg-slate-600" />
              )}
            </List>
          )}
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Find and Explore Data's Best events - Dataroot",
  meta: [
    {
      name: "description",
      content: "description",
    },
    {
      name: "robots",
      content: "all",
    },
    {
      name: "googlebot",
      content: "all",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:title",
      content: "Find and Explore Data's Best events - Dataroot",
    },
    {
      property: "og:description",
      content: "title",
    },
    {
      property: "og:url",
      content: "title",
    },
    {
      property: "og:email",
      content: "hello@dataroot.ca",
    },
    {
      property: "og:site_name",
      content: "dataroot.ca",
    },
    {
      property: "type",
      content: "articles",
    },
    {
      property: "og:updated_time",
      content: "2023-07--8T13:37:33+00:00",
    },
    {
      property: "og:image",
      content: "url",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "600",
    },
    {
      property: "og:image:alt",
      content: "alt",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
    {
      property: "twitter:card",
      content: "image/png",
    },
    {
      property: "twitter:title",
      content: "image/png",
    },
    {
      property: "twitter:description",
      content: "image/png",
    },
    {
      property: "twitter:image",
      content: "image/png",
    },
    {
      property: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      property: "apple-mobile-web-app-status-bar-style",
      content: "black",
    },
  ],
};
