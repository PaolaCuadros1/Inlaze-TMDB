import { useEffect, useState } from 'react'
import TMDB from '@/services/TMDB'
import { Genre, Movie } from '@/types'

export const useMovies = (genreId: Genre['id']): [data: Movie[], error: Error | object, isLoading: boolean] => {
    const [data, setData] = useState<Movie[]>([])
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        TMDB.getMoviesByGenre<Movie[]>(genreId)
            .then((data) => {
                setData(data)
            })
            .catch((error: Error) => {
                setError(error)
                console.error('Error getting Movies: ', error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [genreId])

    return [data, error, isLoading]
}
