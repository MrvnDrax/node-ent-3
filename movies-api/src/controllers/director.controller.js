const { Director } = require("../models");

const createDirector = async (req, res) => {
  const director = await Director.create(req.body);
  res.status(201).json(director);
};

const getDirectors = async (req, res) => {
  const directors = await Director.findAll();
  res.json(directors);
};

const getDirectorById = async (req, res) => {
  const { id } = req.params;
  const director = await Director.findByPk(id);
  res.json(director);
};

const updateDirector = async (req, res) => {
  const { id } = req.params;
  const director = await Director.findByPk(id);
  await director.update(req.body);
  res.json(director);
};

const deleteDirector = async (req, res) => {
  const { id } = req.params;
  const director = await Director.findByPk(id);
  await director.destroy();
  res.status(204).end();
};

module.exports = {
  createDirector,
  getDirectors,
  getDirectorById,
  updateDirector,
  deleteDirector,
};
