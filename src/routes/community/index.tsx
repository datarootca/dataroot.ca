import { component$ } from '@builder.io/qwik';

export default component$(() => {
    const province = [
        {
            name: 'Alberta',
            cities: [
                {
                    name: 'Edmonton',
                },
                {
                    name: 'Red Deer',
                },
                {
                    name: 'Grande Prairie',
                },
                {
                    name: 'Cochrane',
                },
                {
                    name: 'Airdrie',
                },
                {
                    name: 'Leduc',
                },
            ],
        },
        {
            name: 'British Columbia',
            cities: [
                {
                    name: 'Vancouver',
                    communities: [
                        {
                            name: 'DAMA'
                        },
                        {
                            name: 'Data science group'
                        }
                    ]
                },
                {
                    name: 'Victoria',
                },
                {
                    name: 'Chilliwack',
                },
                {
                    name: 'Penticton',
                },
                {
                    name: 'Surrey',
                },
                {
                    name: 'Prince Rupert',
                }
            ],
        },
        {
            name: 'Manitoba',
            cities: [
                { "name": "Winnipeg" },
                { "name": "Brandon" },
                { "name": "Steinbach" }
            ],
        },
        {
            name: 'New Brunswick',
            cities: [
                { "name": "Saint John" },
                { "name": "Moncton" },
                { "name": "Fredericton" }
            ],
        },
        {
            name: 'Newfoundland and Labrador',
            cities: [
                { "name": "St. John's" },
                { "name": "Mount Pearl" },
                { "name": "Corner Brook" }
            ],
        },
        {
            name: 'Nova Scotia',
            cities: [
                { "name": "Halifax" },
                { "name": "Sydney" },
                { "name": "Dartmouth" }
            ],
        },
        {
            name: 'Ontario',
            cities: [
                { "name": "Toronto" },
                { "name": "Ottawa" },
                { "name": "Mississauga" }
            ],
        },
        {
            name: 'Prince Edward Island',
            cities: [
                { "name": "Charlottetown" },
                { "name": "Summerside" },
                { "name": "Stratford" }
            ],
        },
        {
            name: 'Quebec',
            cities: [
                { "name": "Montreal" },
                { "name": "Quebec City" },
                { "name": "Laval" }
            ],
        },
        {
            name: 'Saskatchewan',
            cities: [
                { "name": "Saskatoon" },
                { "name": "Regina" },
                { "name": "Prince Albert" }
            ],
        },
    ];
    return (
        <div >
       
            <ul>
                {province.map((p, index) => {
                    return <>
                        <li key={index} >
                            {p.name}
                        </li>
                         <ul>
                            {p.cities.map((c,index) => (
                                <>
                                    <li key={index}>{c.name}</li>
                                    <ul>
                                        {c.communities ? (
                                            c.communities.map(cpm => (<li>{cpm.name}</li>))
                                        ) : '' }
                                    </ul>
                                </>

                            ))}
                        </ul>
                                        
                    </>
                })}
            </ul>
        </div>
    );
}); 