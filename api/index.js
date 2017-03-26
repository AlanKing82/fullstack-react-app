import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: ['block of cheese', 'garlic']})
});

export default router;