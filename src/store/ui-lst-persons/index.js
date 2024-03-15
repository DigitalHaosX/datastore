import { observable } from "mobx";

const _store = observable({
  search: "",
  pg: 1,
  rpg: 5,
  ids: [],
  nr: 0,
});
export default _store;
