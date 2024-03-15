import root from "../../";
import { runInAction } from "mobx";
import  { getPersons } from "../../../modules/persons";
/* import { toJS } from "mobx"; */
import { requirePersonById } from "../../persons/actions";

export const loadPersons = async () => {
  const serverData = getPersons();
  /* console.log("sdad", serverData); */
  runInAction(() => {
    root.uiLstPersons.nr = serverData.nr;
    root.uiLstPersons.ids = serverData.itms.map((pers) => pers.id);
    /* console.log("ids", toJS(root.uiLstPersons.ids)); */

    for (const it of serverData.itms) {
      /* console.log("dsadas", it); */

      const pers = requirePersonById(it.id);

      pers.updateFromServer(it);

      /*   console.log("aaa", toJS(pers)); */
    }
  });

  /* console.log("xx", toJS(pers)); */

  /* console.log("got from server", serverData);
  const pers = requirePersonById(id);
  pers.setFirstName(serverData.surname);
  pers.setLastName(serverData.name);
  pers.setScore(serverData.score); */
};
