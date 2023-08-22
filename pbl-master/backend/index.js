import express, { urlencoded } from "express";
import initDB from "./db/index.js";

const app = express();
app.use(urlencoded({ extended: true }));

const port = 4000;

const db = initDB();

function findProject(id, projects) {
  return projects.find((project) => project.id === id);
}

function groupTasks(tasks, projects) {
  tasks = tasks.map((task) => {
    task.project = findProject(task.projectId, projects);
    return task;
  });

  tasks = {
    pending: tasks.filter((task) => task.status === "pending"),
    completed: tasks.filter((task) => task.status === "completed"),
    overdue: tasks.filter((task) => task.status === "overdue"),
  };

  Object.keys(tasks).forEach((key) => {
    tasks[key] = tasks[key].map((task) => {
      task.assignees = task.assignees.map((assignee) => findUser(assignee));
      return task;
    });
  });

  return tasks;
}

function findUser(id) {
  return db.users.find((user) => user.id === id);
}

// get team based on user id and replace mentor id with mentor name and members with users
function findTeam(id) {
  const team = db.teams.find((team) => team.members.includes(id));
  team.mentor = findUser(team.mentor);
  team.tasks = groupTasks(team.tasks, team.projects);
  team.members = team.members.map((member) => findUser(member));
  return team;
}

function findTeamsByMentor(id) {
  return db.teams.filter((team) => team.mentor.id === id);
}

/** *GET Requests* **/

// retrieve user data
app.get("/users/:name/:password", (req, res) => {
  let name = req.params.name;
  let password = req.params.password;

  let user = db.users.find((user) => user.name === name);

  if (user) {
    if (db.pass[user.id] === password) {
      switch (user.type) {
        case "mentor":
          res.send({ user, teams: findTeamsByMentor(user.id) });
          break;

        case "hod":
          break;

        case "student":
          let team = findTeam(user.id);
          if (team) res.send({ user, team });
          else res.send({ user });
          break;
      }
    } else {
      res.send({ error: `Incorrect password for ${user.name}` });
    }
  } else {
    res.send({ error: `Username ${name} not found` });
  }
});

app.get("/proposals", (req, res) => {
  res.json({ proposals: db.proposals });
});

app.get("/user/student", (req, res) => {
  res.send("Hello");
});

/** *POST Requests* **/
app.post("/user/new/:type", (req, res) => {
  const type = req.params.type;
  const { name, pass } = req.body;

  db.newUser({ name, pass, type });
  res.sendStatus(200);
});

app.post("/proposals", (req, res) => {
  console.log(req.body);
  db.addProposals(req.body);
  res.sendStatus(200);
});

app.post("/team/:id/project", (req, res) => {
  db.addProject(req.params.id, req.body);
});

/*
// This is not necessary as patch request to the proposals endpoint will update the proposal
app.post("/proposals/:id/comment", (req, res) => {
  const id = req.params.id;
  const comments = db.proposals[id].comments;
  comments.push(req.body.comment);
  db.updateProposal(id, { comments });
  res.sendStatus(200)
});

app.post("/proposals/:id/upvote", (req, res) => {
  const id = req.params.id;
  db.updateProposal(id, { upvotes: db.proposals[id].upvotes++ });
  res.sendStatus(200)
});
*/

/** *PATCH Requests* **/
app.patch("/proposals/:id", (req, res) => {
  db.updateProposal(req.params.id, req.body);
  res.sendStatus(200);
});

app.patch("/user/change/pass", (req, res) => {
  const { name, pass } = req.body;
  if (db.changePass(name, pass)) res.sendStatus(200);
  else res.sendStatus(403);
});

/** *DELETE Requests* **/
app.delete("/proposals/:id", (req, res) => {
  db.deleteProposal(req.params.id);
  res.sendStatus(200);
});

app.delete("/team/:teamId/project/:id", (req, res) => {
  const { teamId, id } = req.params;
  db.deleteProject(teamId, id);
  res.sendStatus(200);
});

// listen to the port
app.listen(port, () => {
  console.log(
    `
PBL Project Page
Server running at http://localhost:${port}
`
  );
});
