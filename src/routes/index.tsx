import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import stylus from "./index.module.css";
export default component$(() => {
  const actions = [
    {
      name: "Discover Data Groups",
      url: "/groups",
    },
    { name: "Dicover Local Events", url: "/events" },
    { name: "Useful articles", url: "/articles" },
  ];
  return (
    <>
      <div class={[stylus.heroContainer, "container"]}>
        <h1 class={stylus.hero}>Data Community.</h1>
        <h1 class={stylus.hero}>
          Explore local <span class={stylus.heroHiglight}>groups</span>
        </h1>
        <h1 class={stylus.subtitle}>
          from your citytown
          <br />
          and meet people
        </h1>
        <p class={stylus.description}>
          Discover new insights, collaborate with industry experts, and elevate
          your data skills to new heights. The future of data awaits you, right
          here on our unified platform.
        </p>
        <div class={stylus.row}>
          {actions.map((a, i) => (
            <div key={i}>
              <Link class={stylus.link} href={a.url}>
                {a.name}
              </Link>
            </div>
          ))}
        </div>

        <p class={stylus.description}>
          Help us drive the data community forward! Join our open-source project
          and contribute your skills, ideas, and expertise. Together, let's
          shape the future of data in Canada and make a meaningful impact on the
          community.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dataroot",
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "description",
      content: "Qwik site description",
    },
    {
      name: "author",
      content: "Tomas Kudlicka",
    },
    {
      name: "robots",
      content: "all",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      content: "dataroot",
    },
    {
      name: "og:email",
      content: "hello@dataroot.ca",
    },
    {
      name: "og:locale",
      content: "",
    },
    {
      name: "og:locale:alternate",
      content: "en_US",
    },
    {
      name: "og:image:width",
      content: "en_US",
    },
    {
      name: "og:image:height",
      content: "en_US",
    },
    {
      name: "og:title",
      content: "en_US",
    },
    {
      name: "og:description",
      content: "en_US",
    },
    {
      name: "og:title",
      content: "en_US",
    },
  ],
};
