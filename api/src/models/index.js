import User from "./user"
import Post from "./posts"

User.hasMany(Post, { foreignKey: "user_id" })
Post.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User, Post };