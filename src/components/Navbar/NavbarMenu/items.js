import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/my-contacts',
    text: 'My Contacts',
  },
];

export default items;
