import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";

import List from "~/components/list";
import { fetchGroups } from "~/app/api";
import GroupCard from "~/components/GroupCard";

export const useGroupsLoader = routeLoader$(async () => {
  return await fetchGroups(1);
});
export default component$(() => {
  const groupItems = useGroupsLoader();
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Groups</h2>
        </div>

        <List>
          {groupItems.value.records.map((group) => {
            return <GroupCard key={group.group_slug} item={group} />;
          })}
        </List>
      </section>
    </>
  );
});


export const head: DocumentHead = {
  title: "Find and Explore Data's Best groups - Dataroot",
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
      content: "Find and Explore Data's Best groups - Dataroot",
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
