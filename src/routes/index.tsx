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
  meta: [],
};
