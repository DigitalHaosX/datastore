import {
  makeObservable,
  computed,
  action,
  observable,
  runInAction,
} from "mobx";

export class Person {
  _id = "";
  _firstName = "";
  _lastName = "";
  _score = "";

  constructor(id) {
    this._id = id;

    makeObservable(this, {
      _id: observable,
      id: computed,
      setId: action.bound,

      _firstName: observable, // private, contain value and change
      firstName: computed, //  read only
      setFirstName: action.bound,

      _lastName: observable,
      lastName: computed,
      setLastName: action.bound,

      _score: observable,
      score: computed,
      setScore: action.bound,

      updateFromServer: action.bound,
    });
  }

  get id() {
    return this._id;
  }

  setId = (val) => {
    this._id = val;
  };

  get firstName() {
    return this._firstName;
  }

  setFirstName = (val) => {
    this._firstName = val;
  };

  get lastName() {
    return this._lastName;
  }

  setLastName = (val) => {
    this._lastName = val;
  };

  get score() {
    return this._score;
  }

  setScore = (val) => {
    this._score = val;
  };

  updateFromServer = (serverData) => {
    runInAction(() => {
      this.setFirstName(serverData.name);
      this.setLastName(serverData.surname);
      this.setScore(serverData.score);
    });
  };
}
