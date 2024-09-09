import { useEffect, useState } from "react"
import TMDB from "@/services/TMDB"
import { Keyword, Movie } from "@/types"

export const useMovieKeywords = (movieId: Movie['id']): [data: Keyword[] | undefined, error: Error | object, isLoading: boolean] => {
    const [data, setData] = useState<Keyword[]>()
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        TMDB.getMovieKeywords<Keyword[]>(movieId)
            .then((data) => {
                setData(data)
            })
            .catch((error: Error) => {
                setError(error)
                console.error(`Error getting Movie Keywords "${movieId}": `, error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [movieId])

    return [data, error, isLoading]
}
