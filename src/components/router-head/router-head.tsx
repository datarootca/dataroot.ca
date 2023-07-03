import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="Dataroot is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic."
      />
      <meta name="author" content="Tomas Kudlicka" />
      <meta name="robots" content="all" />
      <meta name="og:type" content="website" />
      <meta property="og:url" content="https://dataroot.ca" />
      <meta name="og:site_name" content="Dataroot" />
      <meta name="og:email" content="hello@dataroot.ca" />
      <meta name="og:locale" content="en_US" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
