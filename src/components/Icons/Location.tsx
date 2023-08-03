import { component$ } from "@builder.io/qwik";
import style from './index.module.css';
export default component$(() => {
  return (
    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                  class={style.circle}
                />
                <circle cx="256" cy="192" r="48" class={style.circle} />
              </svg>
  );
});
