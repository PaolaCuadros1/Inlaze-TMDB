import Preloader from "../Common/Preloader/Preloader"
import { useMovies } from '@/hooks/useMovies'
import MovieSlider from '../MovieSlider/MovieSlider'
import Alert from '../Common/Alert/Alert'
import { Genre } from "@/types"

interface Props {
    genreId: Genre['id']
    name: string
    simple?: boolean
}

const MoviesGenreRow = ({ genreId, name, simple = false, ...props }: Props): JSX.Element => {
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
        <div>
            <h3>{name}</h3>
            <MovieSlider movies={movies} simple={simple} />
        </div>
    )
}

export default MoviesGenreRow
