import { useEffect, useState } from "react"
import TMDB from "@/services/TMDB"
import { Movie } from "@/types"

export const useMovie = (movieId: Movie['id']): [data: Movie | undefined, error: Error | object, isLoading: boolean] => {
    const [data, setData] = useState<Movie>()
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        TMDB.getMovieById<Movie>(movieId)
            .then((data) => {
                setData(data)
            })
            .catch((error: Error) => {
                setError(error)
                console.error(`Error getting Movie "${movieId}": `, error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [movieId])

    return [data, error, isLoading]
}
