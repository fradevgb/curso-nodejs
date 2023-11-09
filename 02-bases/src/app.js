const { getAge, getUUID } = require('./plugins');

// require('./js-foundation/03-callbacks')
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log('Por favor intente de nuevo'))
  .finally(() => console.log('Finalmente'));

// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = makePerson(obj);

// console.log({ john });
