const Bird = require("../models/bird");

exports.getAllBirds = async () => {
  return await Bird.find();
};

exports.createBird = async (birdData) => {
  const bird = new Bird(birdData);
  return await bird.save();
};

exports.updateBird = async (id, updatedData) => {
  try {
    const bird = await Bird.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );
    if (!bird) {
      throw new Error("Bird not found");
    }
    return bird;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.deleteBird = async (id) => {
  try {
    const deletedBird = await Bird.findByIdAndDelete(id);
    if (!deletedBird) {
      throw new Error("Bird not found");
    }
    return deletedBird;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
