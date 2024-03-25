const persons = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    score: 80,
    team: "red",
    address: "22 st New York",
    studies: "high",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    score: 75,
    team: "yellow",
    address: "22 st New York",
    studies: "high",
  },
  {
    id: 3,
    name: "Alex",
    surname: "Johnson",
    score: 95,
    team: "blue",
    address: "27 st New York",
    studies: "medium",
  },
  {
    id: 4,
    name: "Irene",
    surname: "Red",
    score: 50,
    team: "green",
    address: "50 st New York",
    studies: "low",
  },
  {
    id: 5,
    name: "Max",
    surname: "Planck",
    score: 11,
    team: "red",
    address: "2 st New York",
    studies: "high",
  },
  {
    id: 6,
    name: "Nikola",
    surname: "Tesla",
    score: 100,
    team: "yellow",
    address: "35 st New York",
    studies: "medium",
  },
  {
    id: 7,
    name: "Leonardo",
    surname: "Davinci",
    score: 95,
    team: "blue",
    address: "12 st New York",
    studies: "low",
  },
  {
    id: 8,
    name: "Henry",
    surname: "Ford",
    score: 77,
    team: "green",
    address: "30 st New York",
    studies: "high",
  },
];

export const getPersons = () => {
  return { itms: persons, nr: 5 };
};

const getPersonById = (id) => {
  return persons.find((p) => p.id === id);
};

export default getPersonById;
