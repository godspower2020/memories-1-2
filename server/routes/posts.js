import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

// get-get request for fetching a post
router.get('/', getPosts);
// post-post request for creating a post
router.post('/', createPost);
// patch-updating request for updating a post
router.patch('/:id', updatePost);
// delete-deleting request for deleting a post
router.delete('/:id', deletePost);
// patch-updating request for liking a post
router.patch('/:id/likePost', likePost);

export default router;