import express from 'express';
import { getPost, createPost } from '../controllers/posts.js';

const router = express.Router();

//localhost
router.get('/', getPost);
router.get('/', createPost);
export default router