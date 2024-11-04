const birdService = require("../services/birdService");

exports.getAllBirds = async (req, res, next) => {
  try {
    const birds = await birdService.getAllBirds();
    res.status(200).json(birds.map((e) => e));
  } catch (error) {
    next(error);
  }
};

exports.createBird = async (req, res, next) => {
  try {
    const newBird = await birdService.createBird(req.body);
    res.status(201).json(newBird);
  } catch (error) {
    next(error);
  }
};

exports.updateBird = async (req, res, next) => {
  try {
    const updatedBird = await birdService.updateBird(req.params.id, req.body);
    res.status(200).json(updatedBird);
  } catch (error) {
    next(error);
  }
};

exports.deleteBird = async (req, res, next) => {
  try {
    const deletedBird = await birdService.deleteBird(req.params.id);
    res.status(204).json({ message: "Bird deleted successfully" });
  } catch (error) {
    next(error);
  }
};
