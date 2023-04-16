const resolvers = {
    Query: {
        getMovies: (parent) => {
            return [
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
        }
    },
    Mutation: {

    }
};
export {resolvers};