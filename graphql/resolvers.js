// 쿼리는 데이터베이스에게 question같은거다
// 그래서 우린 이 쿼리를 어떤 방식으로 resolve해야함 ==>resolvers
import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
