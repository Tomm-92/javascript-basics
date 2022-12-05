const { arrayToCSVString } = require("./arrays");

const createPerson = (name, age) => {
return {
  name: name,
  age: age
}
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
if (object[property]) {
return true;
  };
return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  };
    return false;
};

const getAges = people => {
return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(people => name === people.name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === "Honda");
};

const averageAge = people => {
  const { length } = people;
  return people.reduce((acc, val) => {
    return acc + (val.age/length);
 }, 0);
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
