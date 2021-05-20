import Joi from "joi"
import db from "./db";

export default async (req,res) => {
    try{
        const schema = Joi.object({
            id: Joi.string().max(5).min(5).required()
        });
        const {value,error} = schema.validate(req.body);
        if(error){
            throw{ 
                status: 422,
                message: 'Validation Error'
            }
        }else{
            const doc = await (await db()).collection('urls').findOne({shortenedId: value.id});
            if(doc === null){
                res.status(404).json({
                    message: 'ID not found',
                    visits: 0
                })
                return;
            }
            res.status(200).json({
                message: 'Successfully retrieved data',
                visits: doc.visits
            })
        }
    }
    catch(e){
        res.status(e.status || 500).json({
            message: e.message || 'An unexpected error occurred'
        })
    }
}