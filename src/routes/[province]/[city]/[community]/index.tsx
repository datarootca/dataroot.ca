import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import stylus from './index.module.css';
const cities = [
    {
        name: 'DAMA',
        slug: 'dama',
        description: '',
        img: '',
        url: '',
        groups: [],
    },
    {
        name: 'Data science group',
        slug: 'data-science-group',
        img: 'https://secure.meetupstatic.com/photos/event/9/5/1/6/clean_471398166.jpeg',
        description: `Welcome to the Data Science LEARNING Group!
        A meetup for people who want to LEARN Data Science as a group. Taking online courses together. Reading books together. Etc. Also with some hands-on workshops taught by 'experts'. It's also a place where you can ask others questions and for help.`,
        url: 'https://vantech.herokuapp.com/',
        groups: [
            {
                type: 'meetup',
                url: ' http://www.meetup.com/LearnDataScience/',
            },
            {
                type: 'slack',
                url: ' https://vantech.herokuapp.com/',
            },
            {
                type: 'discord',
                url: 'https://discord.gg/EpJPUks'
            },
            {
                type: 'twitter',
                url: '@LearnDSML'
            },
            {
                type: 'linkedin',
                url: ' https://www.linkedin.com/company/learning-data-science/'
            },
        ],
        events: [],
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
            <div class={stylus.content}>
                <img width={700} height={400} class={stylus.image} src={community.img} alt={community.name} />
                <div class={stylus.detail}>
                    <h2 class={stylus.title}>{ community.name}</h2>
                    <p class={stylus.description}>{community.description}</p>
                    <div>Vancouver,BC</div>
                        {community.groups?.map((g,i) => (
                            <a key={i} href={g.url}>{g.type}</a>
                            ))}
                    </div>
            </div>
            <div><a href={community.url}>Visit US</a></div>
            <div>
                Upcoming events
            </div>
       </div>
    );
}); 