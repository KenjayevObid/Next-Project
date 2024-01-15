import { Schema, model, models } from 'mongoose';


const postSchema = new Schema({
title: { type: String, require: true},
body: { type: String, require: true},
});
const Post = models.Post || model('Post', postSchema);
export default Post;
