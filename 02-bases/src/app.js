// require('./js-foundation/03-callbacks')
// const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserById } = require('./js-foundation/04-arrow');

// getUserById(1);

const id = 1;

getUserById(id, (error, user) => {
  if (error) {
    throw new Error(error);
  }
  console.log({ user });
});
