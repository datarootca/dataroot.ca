import { component$, Slot } from "@builder.io/qwik";
import stylus from "./index.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <div class={stylus.back}>
        <svg
          class={stylus.rotate}
          width="20"
          height="20"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9049 26.6675C23.0274 26.6456 23.1368 26.5844 23.2199 26.4925L29.3274 20.4025L29.7124 20L29.3274 19.5975L23.2199 13.5075C23.0843 13.3413 22.8677 13.2647 22.6577 13.3128C22.4499 13.3609 22.2858 13.525 22.2377 13.7328C22.1896 13.9428 22.2662 14.1594 22.4324 14.295L27.5774 19.44L11.0399 19.44C10.8386 19.4378 10.6505 19.5428 10.5477 19.7178C10.4471 19.8928 10.4471 20.1072 10.5477 20.2822C10.6505 20.4572 10.8386 20.5622 11.0399 20.56L27.5774 20.56L22.4324 25.705C22.2508 25.8734 22.2027 26.1403 22.3121 26.3613C22.4193 26.5844 22.6621 26.7069 22.9049 26.6675Z"
            fill="#335C63"
          />
        </svg>
        Vancouver
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
              fill="#335C63"
            />
          </svg>
          Updated 5min ago
        </div>
      </div>
      <div class={stylus.eventWrapper}>
        <div class={stylus.iconWrapper}>ic</div>
        <div class={stylus.titleWrapper}>
          <div class={stylus.heroWrapper}>
            <h2 class={stylus.hero}>DATA SCIENCE WORLD</h2>
            <div class={[stylus.badge, stylus.badgeActive]}>Active</div>
          </div>
          <div class={stylus.subtitle}>
            <span class={stylus.author}>Tomas Kudllicka</span>
            <span class={stylus.dot}></span>
            <span class={stylus.access}>PUBLIC</span>
          </div>
        </div>
      </div>
      <div class={stylus.slider}>
        <span class={stylus.active}>
          <Link href="./">Overview</Link>
        </span>
        <span>
          <Link href="upcoming">Upcoming</Link>
        </span>
        <span>
          <Link href="past">Past</Link>
        </span>
        <span>
          <Link href="cancelled">Cancelled</Link>
        </span>
      </div>
      <Slot /> {/* <== Child layout/route inserted here */}
    </section>
  );
});
