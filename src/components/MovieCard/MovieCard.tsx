import { Movie } from "@/types"
import styles from "./MovieCard.module.css"
import TMDB from "@/services/TMDB"
import CircumferenceImage from "../Images/CircumferenceImage"
import Link from "next/link"
import FavButton from "../Common/FavButton/FavButton"

interface Props extends Movie {
  simple?: boolean
}

const MovieCard = ({ id, original_title, release_date, poster_path, vote_average, simple = false }: Props) => {
  return (
    <Link href={`/movies/${id}`} className={`card ${styles.card}`} title={original_title}>
      <img src={TMDB.getPosterUrl(poster_path)} alt={original_title} className={`card-img-top ${styles.poster}`} />

      <div className='card-body'>
        <h3 className={styles.title}>{original_title}</h3>

        {!simple && (
          <>
            <p className={styles.date}>Release: {release_date}</p>
            <div className='d-flex justify-content-around'>
              <div className='d-flex flex-column align-items-center'>            
                <h6 className={styles.subtitle}>Rating</h6>
                <div className={styles.rating}>
                  <CircumferenceImage />
                  <span className={styles.ratingScore}>{Math.round(vote_average * 10)}%</span>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <h6 className={styles.subtitle}>Favorites</h6>
                <FavButton />
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default MovieCard
