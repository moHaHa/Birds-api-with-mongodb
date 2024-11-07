const birdService = require("../services/birdService");
module.exports = {
  createBird: async (req, res, next) => {
    const newBird = await birdService.createBird(req.body);
    res
      .status(
        // TODO
        200
      )
      .json(newBird);
  },
  updateBird: async (req, res, next) => {
    const updatedBird = await birdService.updateBird(req.params.id, req.body);
    res.status(200).json(updatedBird);
  },
  deleteBird: async (req, res, next) => {
    await birdService.deleteBird(req.params.id);
    res.sendStatus(204);
  },
  getAllBirds: async (req, res, next) => {
    const birds = await birdService.getAllBirds();
    res.status(200).json(birds.map((e) => e));
  },
};
