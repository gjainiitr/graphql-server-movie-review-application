import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    year: Number,
    rating: Number,
    genres: [String]
});

const ReviewSchema = new Schema({
    movieId: String,
    userId: String,
    rating: Number,
    comment: String
});

const Movie = mongoose.model('Movie', MovieSchema);
const Review = mongoose.model('Review', ReviewSchema);

export {Movie, Review};