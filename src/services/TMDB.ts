import { Genre, Movie } from "@/types"


class TMDB {
    public static baseUrl: string = 'https://api.themoviedb.org/3'

    public static getPosterUrl = (posterPath: string): string => {
        return `https://image.tmdb.org/t/p/original${posterPath}`
    }

    public static buildUrl = (path: string): string => {
        const url = `${TMDB.baseUrl}${path}`
        return `${url}${url.includes('?') ? '&' : '?'}language=en-US&api_key=bb0b6c64478783413ff7df64d57197da`
    }

    public static getGenres = async <T>(): Promise<T> => {
        const data = await fetch(
            TMDB.buildUrl('/genre/movie/list')
        ).then((r) => r.json())

        return (data as { genres: [] }).genres as T
    }

    public static getMoviesByGenre = async <T>(genreId: Genre['id']): Promise<T> => {
        const data = await fetch(
            TMDB.buildUrl(`/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=${genreId}`)
        ).then((r) => r.json())

        return (data as { results: [] }).results as T
    }

    public static getMovieById = async <T>(movieId: Movie['id']): Promise<T> => {
        const data = await fetch(
            TMDB.buildUrl(`/movie/${movieId}`)
        ).then((r) => r.json())

        return data as T
    }

    public static getMovieKeywords = async <T>(movieId: Movie['id']): Promise<T> => {
        const data = await fetch(
            TMDB.buildUrl(`/movie/${movieId}/keywords`)
        ).then((r) => r.json())

        return (data as { keywords: [] }).keywords as T
    }
}

export default TMDB
