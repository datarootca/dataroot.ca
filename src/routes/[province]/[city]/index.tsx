import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

const cities = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
];

export const useCityLoader = routeLoader$( ({ params, status }) => {
    // Example database call using the id param
    // The database could return null if the product is not found
    const index = cities.findIndex(c => c.slug === params.city)
   
    if (index === -1) {
      // Product data was not found
      // Set the status code to 404
      status(404);
    }
   
    // return the data (which may be null)
    return cities[index];
  });
   

export default component$(() => {
    const { value: city} = useCityLoader();
    if (!city) {
        return <p>Sorry, looks like city doesnt exists.</p>;
    }
    return (
        <div >
            { city.name}
            <ul>
                {city.communities && city.communities.length !== 0 
                    ? city.communities.map(com => <li><a href={com.slug}>{com.name}</a></li>)
                    : 'City doesnt have community'}
            </ul>
       </div>
    );
}); 