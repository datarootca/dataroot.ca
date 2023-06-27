import { component$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import styles from "./index.module.css";
import Card from '~/components/card'
import List from '~/components/list'
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
          <button>?</button>
        </div>
      </section>
      <section class="container">
        <List>
          <Card
            title='Výstava pohledy berlínský stážistky '
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
            title='Výstava pohledy berlínský stážistky '
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
            title='Výstava pohledy berlínský stážistky '
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
            title='Výstava pohledy berlínský stážistky '
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
            title='Výstava pohledy berlínský stážistky '
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
