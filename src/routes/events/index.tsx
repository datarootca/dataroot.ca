import { component$,$, useStore, useTask$ } from "@builder.io/qwik";
import stylus from "./index.module.css";
import styles from "./index.module.css";
import Card from "~/components/card";
import { routeLoader$,server$, useLocation } from "@builder.io/qwik-city";
import List from "~/components/list";
import db from "../../database";
export interface IEvent {
  eventid: number;
  name: string;
  group_slug: string;
  group_name: string;
  in_person: boolean;
  location: string;
  is_online: boolean;
  img: string;
  link: string;
  yes_rsvp_count: number;
  publish_at: string;
  highres_link: string;
  rsvp_limit: string;
  time: Date;
}
/**
 * Binds query params from object
 *
 * @example
 * // Result for this command would be:
 * // {
 * //   text: 'INSERT INTO foo (id, name) VALUES ($1, $2)'
 * //   values: [1, 'kek']
 * // }
 * let {text, values} = bindQuery('INSERT INTO foo (id, name) VALUES (:id, :user_name)', {id: 1, user_name: 'kek'});
 *
 * // Somewhere in db-related code...
 * pgClient.query(text, values).then(() => ...);
 *
 * @param  {String} queryString Query pattern with values inserted
 * @param  {Object} replaceObj  Object with replacements
 * @param  {Object} startIndex  Index to start with
 * @return {Object}             Object with final query and it's value bindings
 */
function bindQuery(queryString, replaceObj, startIndex = 1) {

    if (!replaceObj) {
        throw new Error('You MUST pass replaceObj as second argument');
    }

    // Initialize all the variables in here
    let [binds, values, index] = [new Map, [], startIndex];

    // Using String.prototype.replace replace all the params in query pattern
    let text = queryString.replace(/[:]?:([a-zA-Z_]+)/g, (search, param) => {
        // Return values that begin as typecast
        if (search.slice(0, 2) === '::') {
            return search;
        }

        // If we already set this parameter
        if (binds.get(param) !== undefined) {
            return '$' + binds.get(param);
        }

        // In other case push parameter into binds and update values array
        binds.set(param, index);
        values.push(replaceObj[param]);
        return '$' + index++;
    });

    return {text, values};
}
export const getEvents = server$(
  async (
  offset: number,
  filter: IFilter) => {
    const per_page = 15;
   const filters = []; 
   const bindings = {}; 
   if(filter.date) {
       filters.push(filter.date);
       bindings.in_person = filter.type;
   }
   if(typeof filter.type === 'boolean') {
       bindings.in_person = filter.type;
       filters.push('in_person = :in_person');
   }
   if(filter.distance) {
       bindings.in_person = filter.type;
       filters.push(filter.date);
   }
   console.log(bindings);

const bindingFilter ={ limit: per_page,
offset,
...bindings,
}

   console.log(bindingFilter);
const query = `select e.eventid,e."time",COALESCE(e.highres_link,g.highres_link) as highres_link,e.name,g.name as group_name,g.slug as group_slug,e.in_person,e.location,e.is_online,e.link,e.yes_rsvp_count,e.rsvp_limit FROM event e
join "group" g using(groupid) ${filters.length != 0 ? `where ${filters.join(' ')}` : ''} limit :limit offset :offset`;
    const preparedQuery = bindQuery(query,bindingFilter);
    console.log(bindingFilter.text);
    const groupQuery = await db.query<IEvent>(
    preparedQuery.text
,preparedQuery.values);
    return groupQuery.rows
    });
interface IFilter {
    type: boolean | null,
    distance: string | null,
    date: string | null,
    }
export const useEventLoader = routeLoader$(async ({ url }): Promise<IEvent[]> => {
    let type = url.searchParams.get('type');
    if(type  === 'person') {
        type = true;
    }
    if(type  === 'online') {
        type = false;
    }
    const distance = url.searchParams.get('distance');
    const date = url.searchParams.get('date');
  return getEvents(0,{
      type,
      distance,
      date,
  });
});
export const handleClick = $(
        async() => {

const type = 'person';
 window.history.pushState(
		'',
		'',
		`${window.location.origin}${window.location.pathname}?${type ? `type=${type}` : ''}`
	);
        }
)
export default component$(() => {
    const location = useLocation();
    const type = location.url.searchParams.get('type');
    const distance = location.url.searchParams.get('distance');
    const date = location.url.searchParams.get('date');
    
  const eventItems = useEventLoader();
  const state = useStore<{
		location: string;
		search: string;
		inPerson: boolean | null;
		categoryIds: string[];
		distance: string | null;
		date: string | null;
	}>({
        location: '',
        search: '',
        inPerson: type == null ? null : Boolean(type) ,
        categoryIds: [],
        distance: distance,
        date: date,
	});
  return (
    <>
      <section class="container">
        <div class={styles.hero}>
          <h2>Events</h2>
        </div>
          <button  onClick$={handleClick}>
          inPerson
          </button>
        <div class={stylus.search}>
          <div class={stylus.searchInput}>
            <input placeholder="search" type="text" />
          </div>
          <div class={stylus.locationInput}>
            <input type="texst" placeholder="location" />
          </div>
          <button class={styles.searchButton} onClick$={server$(handleClick)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="injected-svg text-white fill-current"
              data-src="https://secure.meetupstatic.com/next/images/design-system-icons/search-outline.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="width:20px;height:20px;width:20px;height:20px"
              data-icon="icon-7"
            >
              <title>icon</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 10.5C16.5 13.8137 13.8137 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5ZM18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5ZM16.4697 17.5303L15.9568 17.0174C16.3407 16.6957 16.6957 16.3407 17.0174 15.9568L17.5303 16.4697L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.4697 17.5303Z"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <section class="container">
        <List>
          {eventItems.value.map((event, index) => (
            <Card
              key={index}
              title={event.name}
              subtitle={event.time.toUTCString()}
              href={event.link}
              src={event.highres_link}
            >
              {event.location}
              <div q:slot="footer">
                <div>
                  {event.yes_rsvp_count} going · {event.rsvp_limit} rsvp
                </div>
                <div>
                  {event.is_online ? "online" : ""}
                  {event.in_person
                    ? (event.is_online ? " · " : "") + "person"
                    : ""}
                </div>
              </div>
            </Card>
          ))}
        </List>
      </section>
    </>
  );
});
