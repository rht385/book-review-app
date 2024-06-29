const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');

router.get('/:bookId', reviewController.getReviewsByBookId);
router.post('/:bookId', reviewController.createReview);

module.exports = router;
