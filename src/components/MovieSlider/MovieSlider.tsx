import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import MovieCard from "../MovieCard/MovieCard"
import styles from "./MovieSlider.module.css"
import { Movie } from "@/types"

interface Props {
    movies?: Movie[]
    simple?: boolean
}

const MovieSlider = ({ movies = [], simple = false, ...props }: Props): JSX.Element => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            grabCursor={true}
            {...props}
        >
            {movies.map((m) => {
                return (
                    <SwiperSlide key={`movie-card-${m.id}`} className={styles.slide}>
                        <MovieCard simple={simple} {...m} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default MovieSlider
