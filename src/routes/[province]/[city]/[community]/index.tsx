import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

const cities = [
    {
        name: 'DAMA',
        slug: 'dama',
    },
    {
        name: 'Data science group'
    }
];

export const useCityLoader = routeLoader$( ({ params, status }) => {
    // Example database call using the id param
    // The database could return null if the product is not found
    const index = cities.findIndex(c => c.slug === params.community)
   
    if (index === -1) {
      // Product data was not found
      // Set the status code to 404
      status(404);
    }
   
    // return the data (which may be null)
    return cities[index];
  });
   

export default component$(() => {
    const { value: community} = useCityLoader();
    if (!community) {
        return <p>Sorry, looks like community doesnt exists.</p>;
    }
    return (
        <div >
            { community.name}
       </div>
    );
}); 