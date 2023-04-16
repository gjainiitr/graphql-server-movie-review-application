import { v4 as uuidv4 } from 'uuid';
import { Movie, Review } from '../schema/mongoose.js';

const reviewsList = [
    {
        reviewId: 1,
        movieId: 2,
        userId: 111,
        rating: 3.5,
        comment: "Best movie ever"
    }
];

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

const getMovieWithReview = (parent, args) => {
    let movieId = args.movieId;
    let movie = moviesList.find(movie => movie.id == movieId);
    let reviews = reviewsList.filter(review => review.movieId == movieId);
    let movieWithReviews = {
        details: movie,
        reviews: reviews
    };
    return movieWithReviews;
}

// Done
const addMovie = async (parent, args) => {
    let movieInput = args.input;
    let movie = new Movie(movieInput);
    try {
        movie = await movie.save();
        movie.id = movie._id.toString();
    } catch (err) {

    }
    console.log(movie);
    return movie;
}

// Doing
const updateMovie = (parent, args) => {
    let movieId = args.movieId;
    let updatedDetails = args.input;

    

    let movieDetails = moviesList.find(movie => movie.id == movieId);
    movieDetails = newMovieDetails;
    return movieDetails;
}

const deleteMovie = (parent, args) => {

}

const addReview = (parent, args) => {

}

const updateReview = (parent, args) => {

}

const deleteReview = (parent, args) => {

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