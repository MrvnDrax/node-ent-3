const { Genre } = require("../models");

const createGenre = async (req, res) => {
  const genre = await Genre.create(req.body);
  res.status(201).json(genre);
};

const getGenres = async (req, res) => {
  const genres = await Genre.findAll();
  res.json(genres);
};

const getGenreById = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findByPk(id);
  res.json(genre);
};

const updateGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findByPk(id);
  await genre.update(req.body);
  res.json(genre);
};

const deleteGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findByPk(id);
  await genre.destroy();
  res.status(204).end();
};

module.exports = {
  createGenre,
  getGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
};
