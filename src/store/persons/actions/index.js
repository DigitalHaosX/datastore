import root from "../../";
import { Person } from "../../../modules/cls/person";
import { runInAction } from "mobx";
import getPersonById from "../../../modules/persons";

/**
 *  @param {number} id
 * @returns {Person}
 */

export const requirePersonById = (id) => {
  const _itm = root.persons[id]; // person with id as parameter
  if (_itm) {
    return _itm;
  }
  runInAction(() => {
    root.persons[id] = new Person(id);
  });
  return root.persons[id];
};

export const loadPersonById = async (id) => {
  const serverData = getPersonById(id);
  console.log("got from server", serverData);
  const pers = requirePersonById(id);
  pers.updateFromServer(serverData);
};
