import { readFileSync, writeFileSync } from "fs";

class DB {
  users = [];
  pass = [];
  teams = [];
  proposals = [];

  #path;

  constructor(options = { path: "db/db.t" }) {
    this.#path = options.path;
    this.get();
  }

  get() {
    const data = readFileSync(this.#path);
    const { users, pass, teams, proposals } = JSON.parse(data);

    this.users = users;
    this.pass = pass;
    this.teams = teams;
    this.proposals = proposals;

    return this;
  }

  sync() {
    const data = JSON.stringify(this, null, 2);
    writeFileSync(this.#path, data);
  }

  newUser({ name, pass, type }) {
    const id = this.users.length;
    this.users.push({ id, name, type });
    this.pass.push(pass);
    this.sync();
  }

  changePass(id, [before, after]) {
    if (this.pass[id] === before) {
      this.pass[id] = after;
      this.sync();
      return true;
    }

    return false;
  }

  addProposals({ title, description, queries, teamId }) {
    this.proposals.push({
      title,
      description,
      queries,
      comments: [],
      teamId,
      upVotes: 0,
    });
    this.sync();
  }

  updateProposal(id, proposal) {
    this.proposals[id] = { ...proposal };
    this.sync();
  }

  deleteProposal(id) {
    this.proposals.splice(id, 1);
    this.sync();
  }

  addProject(teamId, project = { title, statement }) {
    const id = this.teams[teamId].projects.length;
    this.teams[teamId].projects.push({ title, statement, id });
    this.sync();
  }

  deleteProject(teamId, id) {
    this.teams[teamId].projects.splice(id, 1);
    this.sync();
  }
}

function db(...options) {
  return new DB(...options);
}

export default db;
