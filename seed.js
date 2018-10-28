const db = require('./server/db');
const Author = require('./server/db/models/author');
const Message = require('./server/db/models/message');
const Channel = require('./server/db/models/channel');

const channels = [
  { name: 'general' },
  { name: 'random' },
  { name: 'documentation' },
  { name: 'announcements' }
];

const authors = [{
  name: 'Charlie',
  image: '/images/cody.jpg'
}, {
  name: 'Chloe',
  image: '/images/chloe.jpg'
}, {
  name: 'Daisy',
  image: '/images/daisy.jpg'
}, {
  name: 'Derpina',
  image: '/images/derpina.jpg'
}, {
  name: 'Felix',
  image: '/images/felix.jpg'
}, {
  name: 'George',
  image: '/images/george.jpg'
}, {
  name: 'Gizmo',
  image: '/images/gizmo.jpg'
}, {
  name: 'Loki',
  image: '/images/loki.jpg'
}, {
  name: 'Lucy',
  image: '/images/lucy.jpg'
}, {
  name: 'Luna',
  image: '/images/luna.jpg'
}, {
  name: 'Max',
  image: '/images/max.jpg'
}, {
  name: 'Oscar',
  image: '/images/oscar.jpg'
}, {
  name: 'Pepper',
  image: '/images/pepper.jpg'
}, {
  name: 'Princess',
  image: '/images/princess.jpg'
}, {
  name: 'Shadow',
  image: '/images/shadow.jpg'
}, {
  name: 'Smokey',
  image: '/images/smokey.jpg'
}];

const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;

const messages = [
  { authorId: id(), content: 'The weather is nice today!', channelId: 1 },
  { authorId: id(), content: 'Where is my yarn?', channelId: 1 },
  { authorId: id(), content: 'I love fancy feast!', channelId: 1 },
  { authorId: id(), content: 'I caught a mouse!', channelId: 2 },
  { authorId: id(), content: 'Let\'s snuggle', channelId: 2 },
  { authorId: id(), content: 'I just want to sleep all day!', channelId: 2 },
  { authorId: id(), content: 'MOUSE!!!', channelId: 3 },
  { authorId: id(), content: 'Where did the mouse go?!', channelId: 3 },
  { authorId: id(), content: 'This is fun!', channelId: 3 },
  { authorId: id(), content: 'Let\'s play!', channelId: 4 },
  { authorId: id(), content: 'hehehe', channelId: 4 },
  { authorId: id(), content: 'Where can I find some tuna?', channelId: 4 }
];

const seed = () =>
  Promise.all(authors.map(author =>
    Author.create(author))
  )
  .then(() =>
  Promise.all(channels.map(channel =>
    Channel.create(channel))
  ))
  .then(() =>
  Promise.all(messages.map(message =>
    Message.create(message))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
