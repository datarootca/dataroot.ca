import { component$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import { useCityLoader } from "./layout";

export default component$(() => {
  const { value: community } = useCityLoader();
  if (!community) {
    return <p>Sorry, looks like community doesnt exists.</p>;
  }
  return (
    <>
      <div class={stylus.cardWrapper}>
        <h3>About</h3>
        <div class={[stylus.card, "card"]}>
          <div class={stylus.header}>
            <p class={stylus.description}>{community.description}</p>
          </div>
        </div>
      </div>
      <div class={stylus.cardWrapper}>
        <h3>Upcoming event</h3>
        <div class={[stylus.card, "card", stylus.event]}>
          <div class={stylus.eventHeader}>
            <div class={stylus.eventWeek}>Fri</div>
            <div class={stylus.eventDate}>02</div>
          </div>
          <div class={stylus.eventTime}>
            <div class={stylus.eventHours}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
                width="16"
                height="16"
              >
                <g>
                  <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M819.3,819.3c-3.8,3.8-8.7,5.6-13.6,5.6c-4.9,0-9.8-1.9-13.6-5.6L493.3,520.5c-1.4-1.3-15.1-15.4-15.1-40.2v-398c0-10.6,8.6-19.2,19.2-19.2s19.2,8.6,19.2,19.2v398c0,8.5,3.9,13,4.1,13.2l298.5,298.5C826.8,799.6,826.8,811.8,819.3,819.3z" />
                </g>
              </svg>
              <span>15:20 - 16:20</span>
            </div>
            <div class={stylus.eventLocation}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                width="16"
                height="16"
                viewBox="0 0 395.71 395.71"
                xml:space="preserve"
              >
                <g>
                  <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                </g>
              </svg>
              <span>Online</span>
            </div>
          </div>
          <div class={stylus.eventHero}>
            <div class={stylus.eventTitle}>Name or lame</div>
            <div class={stylus.eventDescription}>description</div>
          </div>
        </div>
      </div>
      <div class={stylus.cardWrapper}>
        <h3>Related category</h3>
        <section class={stylus.relatedCategory}>
          <a class={stylus.badge}>Career Network</a>
          <a class={stylus.badge}>Professional Networking</a>
          <a class={stylus.badge}>Career Coaching</a>
          <a class={stylus.badge}>Technology Professionals</a>
          <a class={stylus.badge}>Women Programmers</a>
        </section>
      </div>
    </>
  );
});
