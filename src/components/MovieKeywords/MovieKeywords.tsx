import Preloader from "../Common/Preloader/Preloader"
import { useMovieKeywords } from '@/hooks/useMovieKeywords'
import styles from './MovieKeywords.module.css'
import { Movie } from "@/types"

interface Props {
    movieId: Movie['id']
}

const MovieKeywords = ({ movieId, ...props }: Props): JSX.Element | null => {
    const [keywords, error, isLoading] = useMovieKeywords(movieId)

    if (isLoading) {
        return (
            <Preloader />
        )
    }

    if (!keywords || (typeof error === 'object' && Object.keys(error).length > 0)) {
        return null
    }

    return (
        <div className={`d-flex flex-wrap justify-content-around ${styles.container}`} {...props}>
            {keywords.map((k) => <span key={`movie-keyword-${k.id}`} className={styles.keyword}>{k.name}</span>)}
        </div>
    )
}

export default MovieKeywords
