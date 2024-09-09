import { Genre } from "@/types"
import MoviesGenreRow from "../MoviesGenreRow/MoviesGenreRow"
import styles from "./MovieList.module.css"
import MoviesGenreGrid from "../MoviesGenreGrid/MoviesGenreGrid"

interface Props {
    genres?: Genre[]
    selectedGenre?: Genre['id']
}

const MovieList = ({ genres = [], selectedGenre, ...props }: Props): JSX.Element => {
    if (selectedGenre) {
        const genre = genres.find((g) => g.id === selectedGenre)

        return (
            <div {...props}>
                <MoviesGenreGrid genreId={selectedGenre} name={genre ? genre.name : 'Popular'} />
            </div>
        )
    }

    return (
        <div className={`d-flex flex-column ${styles.rowsWrapper}`} {...props}>
            {[].map.call(genres, (g) => (
                    <MoviesGenreRow key={`genre-row-${g.id}`} genreId={g.id} name={g.name} />
                )
            )}
        </div>
    )
}

export default MovieList
