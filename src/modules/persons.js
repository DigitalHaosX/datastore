const persons = [
  { id: 1, name: "John", surname: "Doe", score: 80, team: "red" },
  { id: 2, name: "Jane", surname: "Smith", score: 75, team: "yellow" },
  { id: 3, name: "Alex", surname: "Johnson", score: 95, team: "blue" },
  { id: 4, name: "Irene", surname: "Red", score: 50, team: "green" },
  { id: 5, name: "Max", surname: "Planck", score: 11, team: "red" },
  { id: 6, name: "Nikola", surname: "Tesla", score: 100, team: "yellow" },
  { id: 7, name: "Leonardo", surname: "Davinci", score: 95, team: "blue" },
  { id: 8, name: "Henry", surname: "Ford", score: 77, team: "green" },
];

export const getPersons = () => {
  return { itms: persons, nr: 5 };
};

const getPersonById = (id) => {
  return persons.find((p) => p.id === id);
};

export default getPersonById;
