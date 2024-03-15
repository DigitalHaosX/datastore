const persons = [
  { id: 1, name: "John", surname: "Doe", score: 80 },
  { id: 2, name: "Jane", surname: "Smith", score: 75 },
  { id: 3, name: "Alex", surname: "Johnson", score: 95 },
  { id: 4, name: "Irene", surname: "Red", score: 50 },
  { id: 5, name: "Max", surname: "Planck", score: 11 },
];

export const getPersons = () => {
  return { itms: persons, nr: 5 };
};

const getPersonById = (id) => {
  return persons.find((p) => p.id === id);
};

export default getPersonById;
