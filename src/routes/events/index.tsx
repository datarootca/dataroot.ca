import { component$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import styles from "./index.module.css";
import Card from "~/components/card";
import List from "~/components/list";
export default component$(() => {
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
          <Card
            title="Výstava pohledy berlínský stážistky "
            subtitle="TUES, 27 JUN AT 08:00 UTC+02"
            href="/events"
            src="https://dama-vancouver.org/resources/Pictures/01008_201809_AlbertNormandin_False_CreekVancouverDowntownCityAerial_a589f0f4-e991-4c10-86c3-0f13ebeb927c.jpg"
          >
            lokace
            <div q:slot="footer">
              <div>37 going · 7 rsvp</div>
              <div>online · person</div>
            </div>
          </Card>
          <Card
            title="Výstava pohledy berlínský stážistky "
            subtitle="TUES, 27 JUN AT 08:00 UTC+02"
            href="/events"
            src="https://dama-vancouver.org/resources/Pictures/01008_201809_AlbertNormandin_False_CreekVancouverDowntownCityAerial_a589f0f4-e991-4c10-86c3-0f13ebeb927c.jpg"
          >
            lokace
            <div q:slot="footer">
              <div>37 going · 7 rsvp</div>
              <div>online · person</div>
            </div>
          </Card>
          <Card
            title="Výstava pohledy berlínský stážistky "
            subtitle="TUES, 27 JUN AT 08:00 UTC+02"
            href="/events"
            src="https://dama-vancouver.org/resources/Pictures/01008_201809_AlbertNormandin_False_CreekVancouverDowntownCityAerial_a589f0f4-e991-4c10-86c3-0f13ebeb927c.jpg"
          >
            lokace
            <div q:slot="footer">
              <div>37 going · 7 rsvp</div>
              <div>online · person</div>
            </div>
          </Card>
          <Card
            title="Výstava pohledy berlínský stážistky "
            subtitle="TUES, 27 JUN AT 08:00 UTC+02"
            href="/events"
            src="https://dama-vancouver.org/resources/Pictures/01008_201809_AlbertNormandin_False_CreekVancouverDowntownCityAerial_a589f0f4-e991-4c10-86c3-0f13ebeb927c.jpg"
          >
            lokace
            <div q:slot="footer">
              <div>37 going · 7 rsvp</div>
              <div>online · person</div>
            </div>
          </Card>
          <Card
            title="Výstava pohledy berlínský stážistky "
            subtitle="TUES, 27 JUN AT 08:00 UTC+02"
            href="/events"
            src="https://dama-vancouver.org/resources/Pictures/01008_201809_AlbertNormandin_False_CreekVancouverDowntownCityAerial_a589f0f4-e991-4c10-86c3-0f13ebeb927c.jpg"
          >
            lokace
            <div q:slot="footer">
              <div>37 going · 7 rsvp</div>
              <div>online · person</div>
            </div>
          </Card>
        </List>
      </section>
    </>
  );
});
