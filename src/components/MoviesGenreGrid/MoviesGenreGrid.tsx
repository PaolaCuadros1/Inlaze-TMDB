import Preloader from "../Common/Preloader/Preloader"
import { useMovies } from "@/hooks/useMovies"
import Alert from "../Common/Alert/Alert"
import { Genre } from "@/types"
import MoviesGrid from "../MoviesGrid/MoviesGrid"

interface Props {
    genreId: Genre["id"]
    name: string
}

const MoviesGenreGrid = ({ genreId, name, ...props }: Props): JSX.Element => {
    const [movies, error, isLoading] = useMovies(genreId)

    if (isLoading) {
        return (
            <Preloader />
        )
    }

    if (typeof error === 'object' && Object.keys(error).length > 0) {
        return <Alert>Error loading movies... 😢</Alert>
    }

    return (
        <div {...props}>
            <h3>{name}</h3>
            <MoviesGrid movies={movies} />
        </div>
    )
}

export default MoviesGenreGrid
