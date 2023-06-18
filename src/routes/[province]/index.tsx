import { component$, } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import styles from './index.module.css';
import { Link } from '@builder.io/qwik-city';
const province = [
    {
        name: 'Alberta',
        slug: 'ab',
        cities: [
            {
                name: 'Edmonton',
                slug:'Edmonton',
            },
            {
                name: 'Red Deer',
                slug:'red-deer',
            },
            {
                name: 'Grande Prairie',
                slug: 'grande-prairie',
            },
            {
                name: 'Cochrane',
                slug: 'cochrane',
            },
            {
                name: 'Airdrie',
                slug: 'airdrie',
            },
            {
                name: 'Leduc',
                slug: 'leduc',
            },
        ],
    },
    {
        name: 'British Columbia',
        slug: 'bc',
        cities: [
            {
                name: 'Vancouver',
                slug: 'vancouver',
                communities: [
                    {
                        name: 'DAMA',
                        slug: 'dama',
                    },
                    {
                        name: 'Data science group'
                    }
                ]
            },
            {
                name: 'Victoria',
                slug: 'victoria',
            },
            {
                name: 'Chilliwack',
                slug: 'chilliwack',
            },
            {
                name: 'Penticton',
                slug: 'penticton',
            },
            {
                name: 'Surrey',
                slug: 'surrey',
            },
            {
                name: 'Prince Rupert',
                slug: 'prince-rupert',
            }
        ],
    },
    {
        name: 'Manitoba',
        slug: 'mb',
        cities: [
            { 
                name: "Winnipeg",
                slug: "winnipeg" ,
            },
            { 
                name: "Brandon" ,
                slug: "brandon" ,
            },
            { 
                name: "Steinbach",
                slug: "steinbach",
            }
        ],
    },
    {
        name: 'New Brunswick',
        slug: 'nb',
        cities: [
            { 
                name: "Saint John",
                slug: "saint-john" 
            },
            { 
                name: "Moncton",
                slug: "moncton" 
            },
            { 
                name: "Fredericton",
                slug: "fredericton" 
            }
        ],
    },
    {
        name: 'Newfoundland and Labrador',
        slug: 'nl',
        cities: [
            { 
                name: "St. John's",
                slug: "st-johns" 
            },
            { 
                name: "Mount Pearl",
                slug: "st-pearl" 
            },
            { 
                name: "Corner Brook",
                slug: "st-brook" 
            }
        ],
    },
    {
        name: 'Nova Scotia',
        slug: 'ns',
        cities: [
            { 
                name: "Halifax",
                slug: "halifax" 
            },
            { 
                name: "Sydney",
                slug: "sydney" 
            },
            { 
                name: "Dartmouth",
                slug: "dartmouth" 
            }
        ],
    },
    {
        name: 'Ontario',
        slug: 'on',
        cities: [
            { 
                name: "Toronto",
                slug: "toronto" 
            },
            { 
                name: "Ottawa",
                slug: "ottawa" 
            },
            { 
                name: "Mississauga",
                slug: "mississauga" 
            }
        ],
    },
    {
        name: 'Prince Edward Island',
        slug: 'pe',
        cities: [
            { 
                name: "Charlottetown",
                slug: "charlottetown" 
            },
            { 
                name: "Summerside",
                slug: "summerside" 
            },
            { 
                name: "Stratford",
                slug: "stratford" 
            }
        ],
    },
    {
        name: 'Quebec',
        slug: 'qc',
        cities: [
            { 
                name: "Montreal",
                slug: "montreal" 
            },
            { 
                name: "Quebec City",
                slug: "quebec" 
            },
            { 
                name: "Laval",
                slug: "laval" 
            }
        ],
    },
    {
        name: 'Saskatchewan',
        slug: 'sk',
        cities: [
            { 
                name: "Saskatoon",
                slug: "saskatoon" 
            },
            { 
                name: "Regina",
                slug: "regina" 
            },
            { 
                name: "Prince Albert",
                slug: "albert" 
            }
        ],
    },
];

export const useProvinceLoader = routeLoader$( ({ params, status }) => {
    // Example database call using the id param
    // The database could return null if the product is not found
    const index = province.findIndex(p => p.slug === params.province)
   
    if (index === -1) {
      // Product data was not found
      // Set the status code to 404
      status(404);
    }
   
    // return the data (which may be null)
    return province[index];
  });
   

export default component$(() => {
   const { value: province} = useProvinceLoader();
   if (!province) {
        return <p>Sorry, looks like province doesnt exists.</p>;
    }
 
    return (
        <>
        <h2 class="hero">{province.name}</h2>
        <div class={styles.content}>
        {province.cities.map((c, index) => {
                    return <>
                        <div key={index} style={{'--bg':c.bg}} class={styles.card}>
                            <Link href={c.slug}><h2>{c.name}</h2></Link>
                            <div class={styles.cardHeader}>
                            <div>
                            <div>Upcoming events</div>
                            <h3>5</h3>
                            </div>
                            <div>
                            <div>Groups</div>
                            <h3>5</h3>
                            </div>
                          
                            <div>
                                <div>
                                Past events 
                                </div>
                                <h3>
                                34
                                </h3>
                            </div>
                            </div>
                            {/*<picture>
                            <img  src={'/img/' + p.img} alt={p.name} class={styles.img}/>
                            </picture>*/}
                        </div>
                    </>
                })}
        </ div>
       </>
    );
}); 