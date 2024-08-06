const { Movie, Genre, Actor, Director } = require("../models");

const createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json(movie);
};

const getMovies = async (req, res) => {
  const movies = await Movie.findAll({
    include: [Genre, Actor, Director],
  });
  res.json(movies);
};

const updateMovieGenres = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  await movie.setGenres(req.body);
  const genres = await movie.getGenres();
  res.json(genres);
};

const updateMovieActors = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  await movie.setActors(req.body);
  const actors = await movie.getActors();
  res.json(actors);
};

const updateMovieDirectors = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  await movie.setDirectors(req.body);
  const directors = await movie.getDirectors();
  res.json(directors);
};

module.exports = {
  createMovie,
  getMovies,
  updateMovieGenres,
  updateMovieActors,
  updateMovieDirectors,
};
