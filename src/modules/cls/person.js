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
  _team = "";
  _address = "";
  _studies = "";

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

      _team: observable,
      team: computed,
      setTeam: action.bound,

      _address: observable,
      address: computed,
      setAddress: action.bound,

      _studies: observable,
      studies: computed,
      setStudies: action.bound,

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

  get team() {
    return this._team;
  }
  setTeam = (val) => {
    this._team = val;
  };

  get address() {
    return this._address;
  }
  setAddress = (val) => {
    this._address = val;
  };

  get studies() {
    return this._studies;
  }
  setStudies = (val) => {
    this._studies = val;
  };

  updateFromServer = (serverData) => {
    runInAction(() => {
      this.setFirstName(serverData.name);
      this.setLastName(serverData.surname);
      this.setScore(serverData.score);
      this.setTeam(serverData.team);
      this.setAddress(serverData.address);
      this.setStudies(serverData.studies);
    });
  };
}
