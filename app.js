const express = require("express");
const app = express();
const port = 3000;
const { Movie, Actor, MovieActor } = require("./models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: GET MOVIES INCLUDING TABLES ASSOCIATED WITH IT!
app.get("/movies", async (req, res) => {});

// TODO: GET SPECIFIC JUNCTION TABLE AND INCLUDE TABLE MOVIE AND ACTOR!

app.listen(port, () => {
  console.log("Aplikasi berjalan pada port " + port);
});
