import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import stylus from "./index.module.css";
export default component$(() => {
  return (
    <>
      <section
        class={[
          stylus.header,
          stylus.header_buttons,
          stylus.header_image,
          stylus.section,
          "container",
        ]}
      >
        <div class={[stylus.container, stylus.header__container]}>
          <div class={stylus.header__content}>
            <div class={stylus.header__start}>
              <h1
                class={[stylus.header__title, stylus.subtitle]}
                style="opacity: 1; transform: translate(0px, 0px);"
              >
                Explore local{" "}
                <span style="background-size: 100% 4px;">groups</span> from your
                citytown and meet people.{" "}
              </h1>

              <div
                class={stylus.header__text}
                style="opacity: 1; transform: translate(0px, 0px);"
              >
                Discover new insights, collaborate with industry experts, and
                elevate your data skills to new heights. The future of data
                awaits you, right here on our unified platform.
              </div>

              <div
                class={stylus.header__big}
                style="opacity: 1; transform: translate(0px, 0px);"
              >
                <Link href="/groups" class={stylus.header__link} target="_self">
                  Explore groups
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="14.25"></circle>
                    <path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z"></path>
                  </svg>
                </Link>
                <Link href="/events" class={stylus.header__link} target="_self">
                  Exploge events
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="14.25"></circle>
                    <path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z"></path>
                  </svg>
                </Link>
                <Link
                  href="/articles"
                  class={stylus.header__link}
                  target="_self"
                >
                  Explore articles{" "}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="14.25"></circle>
                    <path d="M20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.7574 9.6967C15.4645 9.40381 14.9896 9.40381 14.6967 9.6967C14.4038 9.98959 14.4038 10.4645 14.6967 10.7574L18.9393 15L14.6967 19.2426C14.4038 19.5355 14.4038 20.0104 14.6967 20.3033C14.9896 20.5962 15.4645 20.5962 15.7574 20.3033L20.5303 15.5303ZM9 15.75L20 15.75L20 14.25L9 14.25L9 15.75Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class={stylus.header__end}>
              <div class={stylus.header__images}>
                <div
                  class={stylus.header__images_poster}
                  style="opacity: 1; transform: translate(0px, 0px);"
                >
                  <img
                    decoding="async"
                    loading="eager"
                    width={100}
                    height={100}
                    role="heading"
                    alt="Conference hall interior"
                    aria-label="Conference Hall"
                    src="/img/main612x612.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Rooted in Collaboration, Flourishing in Data Innovation - Dataroot",
  meta: [
    {
      name: "description",
      content:
        "Dataroot is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
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
      content: "title",
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
      content: "website",
    },
    {
      property: "og:image",
      content: "url na image",
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
      content: "Rooted in Collaboration, Flourishing in Data Innovation",
    },
    {
      property: "twitter:description",
      content:
        "Dataroot is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
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
