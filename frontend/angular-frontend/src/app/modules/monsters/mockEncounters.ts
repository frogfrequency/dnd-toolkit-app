import { IEncounter } from 'src/app/interfaces/IEncounter';

export let mockEncounters: IEncounter[] = [
    {
        name: 'Lake Side Ambush',
        id: 11,
        imageURL: 'https://www.wallpaperup.com/uploads/wallpapers/2017/12/21/1173012/8f0981c63a5e6b6078656e4e148840e7-700.jpg',
        partyMembers: [
            {
                level: 3,
                quantity: 2
            },
            {
                level: 4,
                quantity: 2
            }
        ],
        monsters: [
            {
                slug: 'bandit',
                name: 'Bandit',
                quantity: 3,
                rating: "1/8"

            }
        ]
    },
    {
        name: 'Deep Caverns Entrance',
        id: 12,
        imageURL: 'https://explorednd.com/wp-content/uploads/2021/08/Skeleton-5e-Guide-950x650.png',
        partyMembers: [
            {
                level: 2,
                quantity: 5
            }
        ],
        monsters: [
            {
                slug: 'skeleton',
                name: 'Skeleton',
                quantity: 6,
                rating: "1/4"
            },
            {
                slug: 'aatxe',
                name: 'Aatxe',
                quantity: 1,
                rating: "5"
            },

        ]
    },
    {
        name: 'Unholy Chamber',
        id: 13,
        imageURL: 'https://www.worldanvil.com/media/cache/cover/uploads/images/e5762d0569c5fb487e7f73263d5b08f8.jpg',
        partyMembers: [
            {
                level: 2,
                quantity: 5
            }
        ],
        monsters: [
            {
                slug: 'aboleth',
                name: 'Aboleth',
                quantity: 2,
                rating: "10"
            },
            {
                slug: 'aatxe',
                name: 'Aatxe',
                quantity: 2,
                rating: "5"
            },

        ]
    }
];