import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import Card from "../card";
export default component$(({ item: group }: { item: IGroup }) => {
  return (
    <Card
      key={group.group_slug}
      src={group.group_highres_link}
      href={"/" + group.group_slug}
      subtitle={`${group.city_name},${group.state_symbol.toUpperCase()}`}
      subtitleHref={group.city_slug}
      title={group.group_name}
    >
      <h3 class={styles.author}>{group.organizer}</h3>
      <div q:slot="footer">
        <span>{group.event_count} upcoming events</span> ·
        <span>{group.members} members</span>
      </div>
    </Card>
  );
});
