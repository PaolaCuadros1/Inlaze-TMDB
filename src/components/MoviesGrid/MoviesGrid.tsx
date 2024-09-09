import MovieCard from "../MovieCard/MovieCard"
import styles from "./MoviesGrid.module.css"
import { Movie } from "@/types"

interface Props {
    movies?: Movie[];
}

const MoviesGrid = ({ movies = [], ...props }: Props): JSX.Element => {
    return (
        <div className={`d-flex flex-wrap ${styles.container}`} {...props}>
            {movies.map((m) => <MovieCard key={`movie-card-${m.id}`} {...m} />)}
        </div>
    )
}

export default MoviesGrid
