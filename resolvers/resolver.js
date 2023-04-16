import { v4 as uuidv4 } from 'uuid';

const moviesList = [
    {
        id: 1,
        title: "Dangal",
        year: 2016,
        rating: 8.4,
        genres: ["Action", "Biography", "Drama", "Sport"],
    },
    {
        id: 2,
        title: "Jannat 2",
        year: 2012,
        rating: 5.4,
        genres: ["Action", "Crime", "Drama", "Romance", "Thriller"],
    }
];

const reviewsList = [
    {
        reviewId: 1,
        movieId: 2,
        userId: 111,
        rating: 3.5,
        comment: "Best movie ever"
    }
];

const getMovies = (parent) => {
    return moviesList;
}

//TODO: Implement logic
const getMovieWithReview = (parent, args) => {

}

const addMovie = (parent, args) => {
    let movie = args.input;
    movie.id = uuidv4();
    moviesList.push(movie);
    return movie;
}

const updateMovie = (parent, args) => {

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