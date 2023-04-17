import { Movie, Review } from '../schema/mongoose.js';

// Done
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

// Done
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

// Done
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

// Done
const updateMovie = async (parent, args) => {
    let movieId = args.movieId;
    let updatedDetails = args.input;
    let updatedMovie = await Movie.findByIdAndUpdate(movieId, updatedDetails, {new: true});
    updatedMovie.id = updatedMovie._id.toString();
    return updatedMovie;
}

// Done
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

// Done
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

// Done
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

// Done
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