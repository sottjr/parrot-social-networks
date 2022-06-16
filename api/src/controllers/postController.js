import { Post, User } from '../models'


const postController = {
    async createPost(req, res) {
        try {
            const { user_id, content } = req.body;
            const newPost = await Post.create({
                user_id,
                content
            });


            return res.status(201).json(newPost);
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },
    async listingPost(req, res) {
        try {
            const listingResponse = await Post.findAll({

                attributes: ["post_id", "content", "updatedAt"],
                include: [{ model: User, attributes: ["name"] }]
            });

            return res.status(200).json(listingResponse);
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async updatePost(req, res) {
        const { id } = req.params

        try {
            const {user_id, content} = req.body

            const updatePost = await Post.update (
                { user_id, content},
                {
                    where: {
                        post_id: id
                    }
                })

            return res.status(201).json(updatePost)
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    }

}

module.exports = postController