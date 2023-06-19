import { component$ } from '@builder.io/qwik';
import styles from './index.module.css';
import { Link, routeLoader$} from '@builder.io/qwik-city';
import db from '../../database';

interface IProvince {
    name: string,
    slug: string,
    group_count: number,
    city_count: number,
    event_count: number,
    bg: string,
}
export const useGetProvince = routeLoader$(async (): Promise<IProvince[]> => {
 const provinceItems = await  db.query<IProvince>(`
    SELECT s.name,s.symbol as slug,s.bg,count(c.stateid) as city_count,count(g.groupid) as group_count,count(e.eventid) as event_count
    FROM state s
    LEFT JOIN city c ON s.stateid = c.stateid
    LEFT JOIN "group" g ON g.cityid = c.cityid
    LEFT JOIN "event" e ON e.groupid = g.groupid
    GROUP BY s.stateid
    ORDER BY s.name
 `);
 return provinceItems.rows;
});

export default component$(() => {
    const { value: provinceItems} = useGetProvince()
    return (
    <>
        <h2 class="hero">Province</h2>
        <div class={styles.content}>
       
                {provinceItems.map((p, index) => {
                    return <>
                        <div key={index} style={{'--bg':p.bg}} class={styles.card}>
                            <Link href={`/${p.slug}`}><h2>{p.name}</h2></Link>
                            <div class={styles.cardHeader}>
                            <div>
                            <div>
                            Cities 
                            </div>
                            <h3>
                            {p.city_count}
                            </h3>
                            </div>
                            <div>
                            <div>Groups</div>
                            <h3>{p.group_count}</h3>
                            </div>
                            <div>
                            <div>Upcoming events</div>
                            <h3>{p.event_count}</h3>
                            </div>
                            </div>
                            {/*<picture>
                            <img  src={'/img/' + p.img} alt={p.name} class={styles.img}/>
                            </picture>*/}
                        </div>
                    </>
                })}
        </div>
        </>
    );
}); 
