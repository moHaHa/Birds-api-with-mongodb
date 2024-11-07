const Bird = require("../models/bird");

module.exports = {
  createBird: async (birdData) => {
    const bird = new Bird(birdData);
    return await bird.save();
  },

  updateBird: async (id, updatedData) => {
    try {
      // TODO : REMOVE TRY CATCH
      const bird = await Bird.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true }
      );
      if (!bird) {
        throw new Error("Bird not found"); // TODO : SAVE IN FILE
      }
      return bird;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteBird: async (_id) => {
    const result = await Bird.deleteOne({ _id });
    console.log(result);
  },

  getAllBirds: async () => {
    const result = await Bird.find({}, "-createdAt -updatedAt", {
      // TODO : limit , skip
      lean: true,
    });
    // console.log(result[0].name);
    // result[0].aa = "bb";
    // console.log(result[0]);
    // //
    // result[0] = result[0].toObject();
    // console.log(result[0]);
    // result[0].aa = "bb";
    // console.log(result[0]);

    // result.
    // console.log(result.map(()=>()))
    return result;
  },
};
