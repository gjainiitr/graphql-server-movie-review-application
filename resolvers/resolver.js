import { Movie, Review } from '../schema/mongoose.js';

const getMovies = async (parent) => {
    try {
        let movies = await Movie.find();        
        movies.forEach(movie => {
            movie.id = movie._id.toString();
        })
        return movies;
    } catch (err) {
        console.log(err);
    }
}

const getMovieWithReview = async (parent, args) => {
    let movieId = args.movieId;
    let movie = await Movie.findById(movieId);
    let reviews = await Review.find({movieId: movieId});

    movie.id = movie._id.toString();
    reviews.forEach(review => {
        review.reviewId = review._id.toString();
    })

    let response = {
        details: movie,
        reviews: reviews
    }
    return response;
}

const addMovie = async (parent, args) => {
    let movieInput = args.input;
    let movie = new Movie(movieInput);
    try {
        movie = await movie.save();
        movie.id = movie._id.toString();
    } catch (err) {
        console.log(err);
    }
    console.log(movie);
    return movie;
}

const updateMovie = async (parent, args) => {
    let movieId = args.movieId;
    let updatedDetails = args.input;
    let updatedMovie = await Movie.findByIdAndUpdate(movieId, updatedDetails, {new: true});
    updatedMovie.id = updatedMovie._id.toString();
    return updatedMovie;
}

const deleteMovie = async (parent, args) => {
    let movieId = args.movieId;
    let deletedMovie, deletedReview;
    try {
        deletedMovie = await Movie.findByIdAndDelete(movieId);
        deletedReview = await Review.deleteMany({movieId: movieId});
    } catch (err) {
        console.log(err);
    }
    deletedMovie.id = deletedMovie._id.toString();
    return deletedMovie;
}

const addReview = async (parent, args) => {
    let reviewInput = args.input;
    let review = new Review(reviewInput);
    try {
        review = await review.save();
        review.reviewId = review._id.toString();
    } catch (err) {
        console.log(err);
    }
    return review;
}

const updateReview = async (parent, args) => {
    let reviewId = args.reviewId;
    let updatedDetails = args.input;
    let updatedReview;
    try {
        updatedReview = await Review.findByIdAndUpdate(reviewId, updatedDetails, {new: true});
    } catch (err) {
        console.log(err);
    }
    updatedReview.reviewId = updatedReview._id.toString();
    return updatedReview;
}

const deleteReview = async (parent, args) => {
    let reviewId = args.reviewId;
    let deletedReview;
    try {
        deletedReview = await Review.findByIdAndDelete(reviewId);
    } catch (err) {
        console.log(err);
    }
    deletedReview.reviewId = deletedReview._id.toString();
    return deletedReview;
}

const resolvers = {
    Query: {
        getMovies: getMovies,
        getMovie: getMovieWithReview
    },
    Mutation: {
        addMovie: addMovie,
        updateMovie: updateMovie,
        deleteMovie: deleteMovie,
        addReview: addReview,
        updateReview: updateReview,
        deleteReview: deleteReview
    }
};
export {resolvers};