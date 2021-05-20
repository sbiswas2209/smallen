import Joi from "joi";
import db from "./db";

export default async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.string().max(5).min(5).required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      throw {
        status: 422,
        message: "Validation Error",
      };
    } else {
      await (await db()).collection("urls").findOneAndUpdate(
        { shortenedId: value.id },
        {
          $inc: { visits: 1 },
        }
      );
      const doc = await (await db())
        .collection("urls")
        .findOne({ shortenedId: value.id });
      await (await db()).collection("urls").findOneAndUpdate(
        { shortenedId: value.id },
        {
          $inc: { visits: 1 },
        }
      );
      if (doc !== null) {
        res.status(200).json({
          message: "URL Found",
          url: doc.originalUrl,
        });
      } else {
        res.status(404).json({
          message: "Seems you got lost",
        });
      }
    }
  } catch (e) {
    res.status(e.status || 500).json({
      message: e.message || "An unexpected error occurred",
    });
  }
};
