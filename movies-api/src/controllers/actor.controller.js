const { Actor } = require("../models");

const createActor = async (req, res) => {
  const actor = await Actor.create(req.body);
  res.status(201).json(actor);
};

const getActors = async (req, res) => {
  const actors = await Actor.findAll();
  res.json(actors);
};

const getActorById = async (req, res) => {
  const { id } = req.params;
  const actor = await Actor.findByPk(id);
  res.json(actor);
};

const updateActor = async (req, res) => {
  const { id } = req.params;
  const actor = await Actor.findByPk(id);
  await actor.update(req.body);
  res.json(actor);
};

const deleteActor = async (req, res) => {
  const { id } = req.params;
  const actor = await Actor.findByPk(id);
  await actor.destroy();
  res.status(204).end();
};

module.exports = {
  createActor,
  getActors,
  getActorById,
  updateActor,
  deleteActor,
};
