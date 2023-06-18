import { component$ } from '@builder.io/qwik';
import styles from './index.module.css';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    const province = [
        {
            name: 'Alberta',
            slug: 'ab',
            bg: 'rgb(250,224,205)',
            img: 'ab.svg',
        },
        {
            name: 'British Columbia',
            slug: 'bc',
            bg: 'rgb(250,234,205)',
            img: 'bc.svg',
        },
        {
            name: 'Manitoba',
            slug: 'mb',
            bg: 'rgb(240,249,220)',
            img: 'mb.svg',
        },
        {
            name: 'New Brunswick',
            slug: 'nb',
            bg: 'rgb(240,249,225)',
            img: 'nb.svg',
        },
        {
            name: 'Newfoundland and Labrador',
            slug: 'nl',
            bg: 'rgb(240,249,230)',
            img: 'nl.svg',
        },
        {
            name: 'Nova Scotia',
            slug: 'ns',
            bg: 'rgb(240,249,235)',
            img: 'ns.svg',
        },
        {
            name: 'Ontario',
            slug: 'on',
            bg: 'rgb(240,249,240)',
            img: 'on.svg',
        },
        {
            name: 'Prince Edward Island',
            slug: 'pe',
            bg: 'rgb(240,249,245)',
            img: 'pe.svg',
        },
        {
            name: 'Quebec',
            slug: 'qc',
            bg: 'rgb(240,249,250)',
            img: 'qc.svg',
        },
        {
            name: 'Saskatchewan',
            slug: 'sk',
            bg: 'rgb(240,249,255)',
            img: 'sk.svg',
        },
    ];
    return (
    <>
        <h2 class="hero">Province</h2>
        <div class={styles.content}>
       
                {province.map((p, index) => {
                    return <>
                        <div key={index} style={{'--bg':p.bg}} class={styles.card}>
                            <Link href={`/${p.slug}`}><h2>{p.name}</h2></Link>
                            <div class={styles.cardHeader}>
                            <div>
                            <div>
                            Cities 
                            </div>
                            <h3>
                            34
                            </h3>
                            </div>
                            <div>
                            <div>Groups</div>
                            <h3>5</h3>
                            </div>
                            <div>
                            <div>Upcoming events</div>
                            <h3>5</h3>
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
