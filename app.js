const express = require("express");
const app = express();
const port = 3000;
const { Movie, Actor, MovieActor } = require("./models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: GET MOVIES INCLUDING TABLES ASSOCIATED WITH IT!
// handlernya ini lebih ditaruh di controller
app.get("/movies", async (req, res) => {
  try {
    // MANY TO MANY
    // const movies = await Movie.findAll({
    //   include: Actor,
    // });

    // DOUBLE ONE TO MANY
    const movies = await Movie.findAll({
      include: {
        model: MovieActor,
        include: Actor,
        as: "Roles", // harus sama dengan yang di model

        // cara simple tapi downside nya:
        // kalian bisa aja dapet table yang tidak diperlukan
        // all: true,
        // nested: true,
      },
    });

    res.status(200).json(movies);
  } catch (err) {
    console.log(err, "<<<< ERROR BOS  KU");
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// TODO: GET SPECIFIC JUNCTION TABLE!
app.get("/roles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const role = await MovieActor.findByPk(id, {
      include: [Movie, Actor],
    });

    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Aplikasi berjalan pada port " + port);
});
