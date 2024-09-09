import react from "react"

export interface SvgImage {
  width?: number
  height?: number
  className?: string
  title?: string
}

export interface Genre {
  id: number
  name: string
}

export interface Keyword {
  id: number
  name: string
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids?: number[]
  genres?: Genre[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  homepage?: string
  runtime?: number
}