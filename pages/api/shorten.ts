// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Joi from "joi"
import db from "./db";
import makeid from "./generateId"
import URL from './models/url';

export default async (req, res) => {
  try{
    const schema = Joi.object({
      originalUrl: Joi.string()
        .uri({ domain: { tlds: { allow: true } } })
        .pattern(RegExp(`^https?://${req.headers.host}`), {
          name: 'self reference',
          invert: true,
        })
        .required()
    })
    const {value,error} = schema.validate(req.body);
    if(error){
        console.log(error);
        throw{
            status: 422,
            message: 'Validation Error'
        }
    }
    else{
      const shortenedId:string = await makeid(5);
      const urlDoc = new URL(shortenedId, value.originalUrl, 0);
      await (await db()).collection('urls').insertOne(urlDoc);
      res.status(200).json({
          message: 'URL Shortened',
          id: shortenedId
      })
    }
  }
  catch(e){
      res.status(e.status || 500).json({
          message: e.message || 'An unexpected error occurred'
      })
  }
}
