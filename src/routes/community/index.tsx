import { component$ } from '@builder.io/qwik';

export default component$(() => {
    const province = [
        {
            name: 'Alberta',
            slug: 'alberta',
        },
        {
            name: 'British Columbia',
            slug: 'bc',
        },
        {
            name: 'Manitoba',
            slug: 'manitoba',
        },
        {
            name: 'New Brunswick',
            slug: 'new-brunswick',
        },
        {
            name: 'Newfoundland and Labrador',
            slug: 'nl',
        },
        {
            name: 'Nova Scotia',
            slug: 'nova-scotia',
        },
        {
            name: 'Ontario',
            slug: 'ontario',
        },
        {
            name: 'Prince Edward Island',
            slug: 'pec',
        },
        {
            name: 'Quebec',
            slug: 'quebec',
        },
        {
            name: 'Saskatchewan',
            slug: 'saskatchewan',
        },
    ];
    return (
        <div >
       
            <ul>
                {province.map((p, index) => {
                    return <>
                        <li key={index} >
                            <a href={`/${p.slug}`}>{p.name}</a>
                        </li>
                    </>
                })}
            </ul>
        </div>
    );
}); 