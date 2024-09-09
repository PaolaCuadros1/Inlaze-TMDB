"use client"

import { useMovie } from "@/hooks/useMovie"
import { useParams } from "next/navigation"
import styles from './MovieDetail.module.css'
import Link from "next/link"
import TMDB from "@/services/TMDB"
import Preloader from "@/components/Common/Preloader/Preloader"
import CircumferenceImage from "@/components/Images/CircumferenceImage"
import { IBM_Plex_Sans } from "next/font/google"
import { minutesToStringTime } from "@/filters/time"
import FavButton from "@/components/Common/FavButton/FavButton"
import MoviesGenreRow from "@/components/MoviesGenreRow/MoviesGenreRow"
import MovieKeywords from "@/components/MovieKeywords/MovieKeywords"

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ['700'] })

const MovieDetail = (): JSX.Element => {
    const { id } = useParams()
    const nId = parseInt(id.toString())
    const [movie, error, isLoading] = useMovie(nId)

    if (isLoading) {
        return (
            <Preloader />
        )
    }

    if (!movie || (typeof error === 'object' && Object.keys(error).length > 0)) {
        return (
            <div className="container-fluid">
                <h1>Movie not Found</h1>

                <div className="d-flex justify-content-center">
                    <Link href="/" className="btn btn-primary">Back Home</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={`d-flex justify-content-center align-items-center ${styles.container}`} style={{ backgroundImage: `url('${TMDB.getPosterUrl(movie.backdrop_path)}')`}}>
                <div className={styles.contentBackground}>
                    <div className="container">
                        <div className="mb-3">
                            <Link href="/" className="btn btn-link">Back</Link>
                        </div>

                        <div className={styles.info}>
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <figure className={styles.poster}>
                                    <img src={TMDB.getPosterUrl(movie.poster_path)} alt="" className="img-fluid" />
                                </figure>

                                <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">Official Trailer</a>
                            </div>

                            <div>
                                <h1 className={`${styles.title} ${ibm.className}`}>{movie.original_title}</h1>
                                <div className={`d-flex justify-content-between ${styles.meta}`}>
                                    <span>{movie.release_date}</span>
                                    <span>{minutesToStringTime(movie.runtime || 0)}</span>
                                </div>

                                <h3 className={`${styles.overflowTitle} ${ibm.className}`}>Overview:</h3>
                                <p className={styles.overflow}>{movie.overview}</p>

                                <div className="d-flex justify-content-between align-items-center mb-5">
                                    <div className={`d-flex align-items-center ${styles.ratingWrapper}`}>
                                        <div className={`d-flex justify-content-center align-items-center ${styles.rating}`}>
                                            <CircumferenceImage width={92} height={92} />
                                            <span className={`${styles.ratingScore} ${ibm.className}`}>{Math.round(movie.vote_average * 10)}%</span>
                                        </div>

                                        <span className={styles.ratingLabel}>
                                            Users<br/>
                                            Score
                                        </span>
                                    </div>

                                    <FavButton />
                                </div>

                                <MovieKeywords movieId={movie.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {movie.genres && (
                <div className="container">
                    <MoviesGenreRow genreId={movie.genres[0].id} name={'Recommendations'} simple={true} />
                </div>
            )}
        </>
    )
}

export default MovieDetail
