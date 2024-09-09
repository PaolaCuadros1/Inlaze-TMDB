import { useEffect, useState } from 'react'
import TMDB from '@/services/TMDB'
import { Genre } from '@/types'

export const useGenres = (): [data: Genre[], error: Error | object, isLoading: boolean] => {
    const [data, setData] = useState<Genre[]>([])
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        TMDB.getGenres<Genre[]>()
            .then((data) => {
                setData(data)
            })
            .catch((error: Error) => {
                setError(error)
                console.error('Error getting Genres: ', error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return [data, error, isLoading]
}
