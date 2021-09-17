import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { PostDTO } from "../model/Post";

export default class PostController {
  
    async createPost (req: Request, res: Response){
        try {

            const postDTO: PostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                authorId: req.body.authorId,
            };

            if (!postDTO.photo || !postDTO.description || !postDTO.type || !postDTO.authorId) {
                res.statusCode = 400;
                throw new Error("Preencha todos os campos")
            };

            const output = await new PostBusiness().createPost(postDTO);

        } catch (error: any){
            if(res.statusCode === 200){
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };
    };

    async searchPostById (req: Request, res: Response){
        try {

        } catch (error: any){
            if(res.statusCode === 200){
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };
    };
};