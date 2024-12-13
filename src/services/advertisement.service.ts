import Advertisement from "../repositories/advertisement.rep";

class AdvertisementService {
  static async create(data) {
    try {
      const advertisementEntity = Advertisement.create(data);
      await Advertisement.save(advertisementEntity);
    } catch (error) {
      throw error;
    }
  }

  static async findAll(query) {
    try {
      return await Advertisement.find(query);
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      return await Advertisement.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id, data) {
    try {
      return await Advertisement.update({ id }, data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id) {
    try {
      await Advertisement.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

export default AdvertisementService;
