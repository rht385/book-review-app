const Review = require('../models/review');
const Book = require('../models/books');
const User = require('../models/users');

exports.getReviewsByBookId = async (req, res) => {
    try {
        const reviews = await Review.find({ book: req.params.bookId }).populate('user', 'username');
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createReview = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        const user = await User.findById(req.query.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const review = new Review({
            book: req.params.bookId,
            user: req.query.userId,
            rating: req.body.rating,
            comment: req.body.comment
        });

        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
