import express from 'express';
import { login, cheack, userList } from './user.controller';
import { auth } from '../utile';

const router = express.Router();

router.post('/', login);
router.get('/', auth, userList);
router.get('/auth/', auth, cheack);

export default router;
