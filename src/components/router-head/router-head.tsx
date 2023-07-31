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
      <link rel="canonical" href={loc.url.href} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=2, minimum-scale=1"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>{head.title}</title>
      <meta name="author" content="Tomas Kudlicka" />
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
