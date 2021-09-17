import PostDB from "../data/PostDB";
import { Post, PostDTO } from "../model/Post";
import { IdGenerator } from "../services/IdGenerator";

export default class PostBusiness {
    async createPost (postDTO: PostDTO) {

        const randomId = new IdGenerator().generateId();

        const postModel: Post = {
            id: randomId,
            photo: postDTO.photo,
            description: postDTO.description,
            type: postDTO.type,
            authorId: postDTO.authorId
        };

        const savedPost = await new PostDB().insertPost(postModel);

        return {
            post: postModel
        };
    };

    async searchPostByID (postId: string) {

        const post = await new PostDB().findPostById(postId);

        return {
            post: post
        };
    };

};