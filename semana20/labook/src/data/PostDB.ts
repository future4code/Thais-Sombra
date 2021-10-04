import { Post } from "../model/Post";
import BaseDB from "./BaseDB";
import { postTableName } from "./constants";

export default class PostDB extends BaseDB {
    public insertPost = async (post: Post): Promise<any> => {
        const result = await BaseDB.connection(postTableName)
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.authorId,
            });
            return result;
    };

    public findPostById = async (id: string): Promise<any> => {
        const result = await BaseDB.connection(postTableName)
            .select('*')
            .where({
                id: id
            });
        return result[0];
    };
};