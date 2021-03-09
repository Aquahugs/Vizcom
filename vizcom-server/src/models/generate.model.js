const query = require("../services/db/db-connection");

class BucketModel {
  find = async () => {
    const getBucketsSql = `select *
        from generated_image `;

    const generatedImages = await query(getBucketsSql);
    const shuffledImages = generatedImages.sort(() => 0.5 - Math.random());

    return shuffledImages;
  };
}

module.exports = new BucketModel();
