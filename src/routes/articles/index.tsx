import {
  component$,
  useStore,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  server$,
} from "@builder.io/qwik-city";
import stylus from "./index.module.css";
import Spinner from "~/components/spinner";
import { fetchArticles } from "~/app/api";

export const thingy = { value: 0 };

function getSourceIcon(provider: string) {
  if(provider === 'meetup') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 -55 256 256"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
            fill="#000000"
          ></path>
        </g>
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      viewBox="0 -55 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  );
}

export const getArticles = server$(
  async ({ page }: { page: number }) => {
      return await fetchArticles(page)
  });
export const useInitialDataLoader = routeLoader$(() => {
  return getArticles({ page: 1 });
});

export default component$(() => {
  const initialData = useInitialDataLoader();
  const articles = useStore(initialData.value.records ?? []);
  const loadingMore = useSignal(false);
  const page = useSignal(initialData.value.meta.page);
  const lastPage = useSignal(initialData.value.meta.pages);
  const count = useSignal(initialData.value.meta.count);

  useVisibleTask$(({ cleanup }) => {
    const nearBottom = async () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loadingMore.value
      ) {
        loadingMore.value = true;

        const newArticles = await getArticles({ page: page.value + 1 });
        page.value = newArticles.meta.page;
        lastPage.value = newArticles.meta.pages;
        count.value = newArticles.meta.count;
        if (page.value === newArticles.meta.pages) {
          window.removeEventListener("scroll", nearBottom);
          loadingMore.value = false;
          return;
        }

        articles.push(...newArticles.records);

        // small timeout to prevent multiple requests
        setTimeout(() => (loadingMore.value = false), 500);
      }
    };

    window.addEventListener("scroll", nearBottom);

    cleanup(() => window.removeEventListener("scroll", nearBottom));
  });
  return (
    <div class={[stylus.container, "container"]}>
      <h2>Articles </h2>
      count {count.value}
      <div class={[stylus.articles]}>
        <section class={stylus.content}>
          {articles.map((article, index) => (
            <div key={index} class={stylus.article}>
              <div class={stylus.articleContainer}>
                <div class={stylus.header}>
                  <div class={stylus.source}>
                    {getSourceIcon(article.source)}
                  </div>
                  <h4 class={stylus.author}>{article.author}</h4>
                </div>
                <a class={stylus.link} href={article.link}>
                  <h2>{article.name}</h2>
                  <h3 class={stylus.description}>{article.description}</h3>
                  <div class={stylus.footer}>
                    <span>{new Date(article.publish_at).toUTCString()}</span>
                    <span>{article.time_m} min read</span>
                  </div>
                </a>
              </div>
              <div class={stylus.img}>
                <img class={stylus.img} src={article.highres_link || ''} alt="" />
              </div>
            </div>
          ))}
          {loadingMore.value ? (
            <div class="mt-14">
              <Spinner />
            </div>
          ) : (
            <div class="mt-14 h-2 w-2 self-center rounded-full bg-stone-200 dark:bg-slate-600" />
          )}
        </section>
        <aside class={stylus.sidebar}>
          <div class={stylus.sidebarSlider}>
            <h3>Discover more</h3>
            <p>
              The data community is a vibrant and dynamic ecosystem that
              encompasses professionals, enthusiasts, and organizations involved
              in various aspects of data management, analysis, and utilization.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Find and Explore Data's Best Resources - Dataroot",
  meta: [],
};
