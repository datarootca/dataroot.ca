import { component$, Slot } from "@builder.io/qwik";
import stylus from "./index.module.css";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import { fetchDetailGroup } from "~/app/api";

export const useInitialDataLoder = routeLoader$(
  async ({ status,params }): Promise<ApiGroupDetailedResponse | undefined> => {

    const item = await fetchDetailGroup(params.community);
    if (!item) {
      status(404);
      return;
    }

    return item;
  }
);
function getIcon(provider: string) {
  if (provider === "slack") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
      >
        <g id="ic-social-media-slack">
          <rect
            class={stylus.cls}
            height="9.96"
            rx="2.5"
            width="4.99"
            x="15.25"
            y="3.61"
          />

          <path
            class={stylus.cls}
            d="M25.63,12.64A2.38,2.38,0,0,0,27.4,9c-.09-.12-.19-.23-.29-.34h0a2.34,2.34,0,0,0-.35-.29,2.37,2.37,0,0,0-3.63,1.77l.06,2.43Z"
          />

          <path
            class={stylus.cls}
            d="M20.24,25a2.39,2.39,0,0,0,3.64,1.78c.12-.09.23-.19.34-.29h0a3.17,3.17,0,0,0,.29-.35,2.38,2.38,0,0,0-1.77-3.63l-2.43.06Z"
          />

          <path
            class={stylus.cls}
            d="M7.54,20.16a2.37,2.37,0,0,0-1.77,3.63,1.87,1.87,0,0,0,.29.34h0a1.87,1.87,0,0,0,.34.29A2.37,2.37,0,0,0,10,22.65L10,20.22Z"
          />

          <path
            class={stylus.cls}
            d="M12.36,7.11A2.38,2.38,0,0,0,8.73,5.33c-.12.09-.23.19-.34.29h0A2.34,2.34,0,0,0,8.1,6,2.37,2.37,0,0,0,9.87,9.6l2.43-.06Z"
          />

          <rect
            class={stylus.cls}
            height="9.96"
            rx="2.5"
            width="4.99"
            x="12.48"
            y="18.48"
          />

          <rect
            class={stylus.cls}
            height="9.96"
            rx="2.5"
            transform="translate(41.61 -6.64) rotate(90)"
            width="4.99"
            x="21.62"
            y="12.5"
          />

          <rect
            class={stylus.cls}
            height="9.96"
            rx="2.5"
            transform="translate(23.73 5.55) rotate(90)"
            width="4.99"
            x="6.59"
            y="9.66"
          />
        </g>
      </svg>
    );
  } else if (provider === "twitter") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
      </svg>
    );
  } else if (provider === "meetup") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="42"
        height="42"
        viewBox="0 0 32 32"
      >
        <path d="M 9.5 1 A 0.5 0.5 0 0 0 9.5 2 A 0.5 0.5 0 0 0 9.5 1 z M 18.5 2 A 1.5 1.5 0 0 0 18.5 5 A 1.5 1.5 0 0 0 18.5 2 z M 14 5 C 11.383 5 9.16375 6.678625 8.34375 9.015625 C 5.93275 9.099625 4 11.068 4 13.5 C 4 14.207 4.17775 14.867891 4.46875 15.462891 C 3.56175 16.367891 3 17.618 3 19 C 3 21.422 4.7227656 23.441391 7.0097656 23.900391 C 7.0087656 23.934391 7 23.966 7 24 C 7 26.761 9.239 29 12 29 C 13.213 29 14.309781 28.551031 15.175781 27.832031 C 15.899781 28.554031 16.898 29 18 29 C 19.868 29 21.424281 27.713422 21.863281 25.982422 C 24.730281 25.793422 27 23.415 27 20.5 C 27 19.348 26.645062 18.279484 26.039062 17.396484 C 26.631062 16.769484 27 15.93 27 15 C 27 13.599 26.171422 12.399844 24.982422 11.839844 C 24.989422 11.726844 25 11.615 25 11.5 C 25 8.462 22.538 6 19.5 6 C 18.877 6 18.280656 6.1078281 17.722656 6.2988281 C 16.699656 5.4878281 15.407 5 14 5 z M 7 6 A 1 1 0 0 0 7 8 A 1 1 0 0 0 7 6 z M 27 9 A 1 1 0 0 0 27 11 A 1 1 0 0 0 27 9 z M 17.005859 9.9921875 C 17.152094 9.9790625 17.314656 9.9865781 17.503906 10.017578 C 18.014906 10.091578 18.311219 10.441547 18.699219 10.810547 C 19.013219 11.130547 19.240922 10.933125 19.419922 10.828125 C 19.696922 10.668125 19.913281 10.527875 20.738281 10.546875 C 21.600281 10.564875 22.585922 10.879422 22.794922 12.357422 C 23.022922 14.014422 20.140078 18.269234 20.330078 20.240234 C 20.465078 21.626234 22.794375 20.639203 22.984375 21.908203 C 23.232375 23.557203 20.085813 22.942797 19.382812 22.591797 C 18.255813 22.024797 17.566609 20.742609 17.849609 19.474609 C 18.083609 18.526609 20.158141 14.653219 20.244141 14.074219 C 20.318141 13.458219 19.999594 13.402344 19.808594 13.402344 C 19.543594 13.384344 19.352891 13.508484 19.087891 13.896484 C 18.859891 14.247484 16.271922 19.512219 16.044922 19.949219 C 15.323922 21.341219 13.457969 21.113125 13.667969 19.703125 C 13.722969 19.284125 15.379266 15.516922 15.447266 14.919922 C 15.502266 14.568922 15.430125 14.179281 15.078125 13.988281 C 14.727125 13.809281 14.302688 14.093734 14.179688 14.302734 C 14.000687 14.604734 11.678641 20.782281 11.431641 21.238281 C 10.994641 22.026281 10.550187 22.273547 9.8671875 22.310547 C 8.2661875 22.402547 7.0667031 21.046203 7.5957031 19.408203 C 7.8237031 18.669203 9.3681094 13.114125 10.162109 11.703125 C 10.692109 10.755125 12.15225 10.035656 13.15625 10.472656 C 13.68625 10.700656 14.425766 11.068828 14.634766 11.173828 C 15.127766 11.407828 15.655234 10.791281 15.865234 10.613281 C 16.276234 10.257781 16.567156 10.031562 17.005859 9.9921875 z M 30.5 13 A 0.5 0.5 0 0 0 30.5 14 A 0.5 0.5 0 0 0 30.5 13 z M 1.5 14 A 1.5 1.5 0 0 0 1.5 17 A 1.5 1.5 0 0 0 1.5 14 z M 29 16 A 1 1 0 0 0 29 18 A 1 1 0 0 0 29 16 z M 5.5 25 A 0.5 0.5 0 0 0 5.5 26 A 0.5 0.5 0 0 0 5.5 25 z M 23.5 27 A 1.5 1.5 0 0 0 23.5 30 A 1.5 1.5 0 0 0 23.5 27 z M 15 29 A 1 1 0 0 0 15 31 A 1 1 0 0 0 15 29 z" />
      </svg>
    );
  } else if (provider === "linkedin") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-brand-linkedin"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  }
  return (
    <svg
      class={stylus.stroke}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 48 48"
    >
      <defs></defs>
      <path
        class={stylus.a}
        d="M17.54,34.22A47.42,47.42,0,0,1,14.68,38C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31"
      />
      <path
        class={stylus.a}
        d="M17.85,22.67a3.48,3.48,0,0,0-3.37,3.9,3.38,3.38,0,0,0,3.31,3.22,3.53,3.53,0,0,0,3.43-3.9A3.45,3.45,0,0,0,17.85,22.67Z"
      />
      <path
        class={stylus.a}
        d="M12.2,14.37a28.19,28.19,0,0,1,8.16-2.18A23.26,23.26,0,0,1,24,12a23.26,23.26,0,0,1,3.64.21,28.19,28.19,0,0,1,8.16,2.18m-7.47-2.09,1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.83,44.83,0,0,1,43.5,33S40.7,37.79,33.32,38a47.42,47.42,0,0,1-2.86-3.81m6.46-2.9a29.63,29.63,0,0,1-8.64,3.49,21.25,21.25,0,0,1-4.28.4h0a21.25,21.25,0,0,1-4.28-.4,29.63,29.63,0,0,1-8.64-3.49"
      />
      <path
        class={stylus.a}
        d="M30.15,22.67a3.48,3.48,0,0,1,3.37,3.9,3.38,3.38,0,0,1-3.31,3.22,3.53,3.53,0,0,1-3.43-3.9A3.45,3.45,0,0,1,30.15,22.67Z"
      />
    </svg>
  );
}

export default component$(() => {
  const { value: community } = useInitialDataLoder();
  if (!community) {
    return <p>Sorry, looks like community doesnt exists.</p>;
  }

  const location = useLocation();
  const currentLocation = location.url.pathname;

  const sliderLinks = [
    {
      name: "Overview",
      uri: `/${community.slug}/`,
    },
    {
      name: "Upcoming",
      uri: `/${community.slug}/upcoming/`,
    },
    {
      name: "Reccuring",
      uri: `/${community.slug}/reccuring/`,
    },
    {
      name: "Past",
      uri: `/${community.slug}/past/`,
    },
  ];
  const groups = [
    {
      type: "meetup",
      url: " http://www.meetup.com/LearnDataScience/",
    },
    {
      type: "slack",
      url: " https://vantech.herokuapp.com/",
    },
    {
      type: "discord",
      url: "https://discord.gg/EpJPUks",
    },
    {
      type: "twitter",
      url: "@LearnDSML",
    },
    {
      type: "linkedin",
      url: " https://www.linkedin.com/company/learning-data-science/",
    },
  ];
  return (
    <>
      <section class={stylus.heroSection}>
        <div class={stylus.imageWrapper}>
          <picture>
            <img
              class={stylus.img}
              src={community.highres_link}
              alt={community.name}
            />
          </picture>
        </div>
        <div class={stylus.container}>
          <div class={stylus.eventWrapper}>
            <div class={stylus.iconWrapper}></div>
            <div class={stylus.titleWrapper}>
              <div class={stylus.heroWrapper}>
                <h2 class={stylus.hero}>{community.name.toUpperCase()}</h2>
                <div class={[stylus.badge, stylus.badgeActive]}>
                  {community.active ? "ACTIVE" : "UNACTIVE"}
                </div>
              </div>
              <div class={stylus.subtitle}>
                <span class={stylus.author}>{community.organizer}</span>

                <span class={stylus.dot}></span>
                <span class={stylus.access}>
                  {community.private ? "PRIVATE" : "PUBLIC"}
                </span>
              </div>
            </div>
          </div>
      
          <div class={stylus.infoWrapper}>
            <div class={stylus.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                  class={stylus.circle}
                />
                <circle cx="256" cy="192" r="48" class={stylus.circle} />
              </svg>
              <span>
                {community.city_name},{community.state_symbol.toUpperCase()}
              </span>
            </div>
            <div class={stylus.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.5 21C21.8807 21 23 19.8807 23 18.5C23 16.1726 21.0482 15.1988 19 14.7917M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3M3.5 21.0001H14.5C15.8807 21.0001 17 19.8808 17 18.5001C17 14.4194 11 14.5001 9 14.5001C7 14.5001 1 14.4194 1 18.5001C1 19.8808 2.11929 21.0001 3.5 21.0001ZM13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{community.members} members</span>
            </div>
            <div class={stylus.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.5 21C21.8807 21 23 19.8807 23 18.5C23 16.1726 21.0482 15.1988 19 14.7917M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3M3.5 21.0001H14.5C15.8807 21.0001 17 19.8808 17 18.5001C17 14.4194 11 14.5001 9 14.5001C7 14.5001 1 14.4194 1 18.5001C1 19.8808 2.11929 21.0001 3.5 21.0001ZM13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>pay fee</span>
            </div>
          </div>
          
          <div class={stylus.social}>
            <h5>Find us also at:</h5>
            <div class={stylus.links}>
              {groups?.map((g, i) => (
                <a class={stylus.link} target="_blank" key={i} href={g.url}>
                  {getIcon(g.type)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class={stylus.slider}>
          {sliderLinks.map((link, index) => (
            <span
              key={index}
              class={currentLocation == link.uri ? stylus.active : ""}
            >
              <Link href={link.uri}>{link.name}</Link>
            </span>
          ))}
        </div>
        <Slot /> {/* <== Child layout/route inserted here */}
      </div>
      <div class={stylus.line}>
        <hr />
        <div class={stylus.updated}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 8C19.4337 7.99907 19.368 8.01131 19.3065 8.03601C19.245 8.06072 19.189 8.0974 19.1418 8.14392C19.0947 8.19045 19.0572 8.24588 19.0316 8.30701C19.006 8.36814 18.9929 8.43374 18.9929 8.5C18.9929 8.56627 19.006 8.63187 19.0316 8.693C19.0572 8.75413 19.0947 8.80956 19.1418 8.85608C19.189 8.90261 19.245 8.93929 19.3065 8.96399C19.368 8.9887 19.4337 9.00094 19.5 9C25.3048 9 30 13.6952 30 19.5C30 25.3048 25.3048 30 19.5 30C13.6952 30 9 25.3048 9 19.5C9 16.1537 10.5654 13.1824 13 11.2598V14.5C12.9991 14.5663 13.0113 14.632 13.036 14.6935C13.0607 14.755 13.0974 14.811 13.1439 14.8582C13.1904 14.9053 13.2459 14.9428 13.307 14.9684C13.3681 14.994 13.4337 15.0071 13.5 15.0071C13.5663 15.0071 13.6319 14.994 13.693 14.9684C13.7541 14.9428 13.8096 14.9053 13.8561 14.8582C13.9026 14.811 13.9393 14.755 13.964 14.6935C13.9887 14.632 14.0009 14.5663 14 14.5V10.2754V9.5H9C8.93374 9.49907 8.86796 9.51131 8.80648 9.53601C8.74499 9.56072 8.68903 9.5974 8.64185 9.64392C8.59466 9.69045 8.5572 9.74588 8.53162 9.80701C8.50605 9.86814 8.49288 9.93374 8.49288 10C8.49288 10.0663 8.50605 10.1319 8.53162 10.193C8.5572 10.2541 8.59466 10.3096 8.64185 10.3561C8.68903 10.4026 8.74499 10.4393 8.80648 10.464C8.86796 10.4887 8.93374 10.5009 9 10.5H12.3496C9.70104 12.6074 8 15.8561 8 19.5C8 25.8452 13.1548 31 19.5 31C25.8452 31 31 25.8452 31 19.5C31 13.1548 25.8452 8 19.5 8Z"
              fill="--color"
            />
          </svg>
          Updated 5min ago
        </div>
      </div>
      <section class="container">
        <h3>Similiar group nearby</h3>
      </section>
    </>
  );
});
