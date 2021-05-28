import image from 'public/images/image_5.jpg'
import image1 from 'public/images/image_7.jpg';
import image2 from 'public/images/image_4.jpg';
import image3 from 'public/images/image_6.jpg';

export type Rooms = {
    [key: string]: {
        id: number;
        name: string;
        guestsAmount: number;
        description: string;
        price: number;
        bookLink?: string;
        path: string;
        images: Array<string>
    }
}

export const rooms: Rooms = {
    room1: {
        id: 0,
        name: 'Lord`s Chambers',
        guestsAmount: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 500,
        images: [image, image1, image2, image3],
        path: '/rooms/lords_chambers',
    },
    room2: {
        id: 1,
        name: 'Cell Monks',
        guestsAmount: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 250,
        images: [image, image1, image2, image3],
        path: '/rooms/cell_monks',
    },
    room3: {
        id: 2,
        name: 'Knights of the Guild',
        guestsAmount: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        price: 200,
        images: [image, image1, image2, image3],
        path: '/rooms/knights_of_the_guild',
    },
    room4: {
        id: 3,
        name: 'Den of Thiefes',
        guestsAmount: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 180,
        images: [image, image1, image2, image3],
        path: '/rooms/den_of_thieves',
    }
}
