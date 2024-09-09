"use client"

import { Genre } from "@/types"
import MovieList from "../MovieList/MovieList"
import styles from './MovieSelector.module.css'
import MovieSelectorSidebar from "./Sidebar/Sidebar"
import { ChangeEvent, useState } from "react"
import { useGenres } from "@/hooks/useGenres"
import Alert from "../Common/Alert/Alert"
import Preloader from "../Common/Preloader/Preloader"

interface Props {
    genreId?: Genre['id']
}

const MovieSelector = ({ genreId }: Props): JSX.Element => {
    const [genres, error, isLoading] = useGenres()
    const [search, setSearch] = useState('')
    const [selectedGenre, setSelectedGenre] = useState(genreId)

    const handleSearch = (e: ChangeEvent) => {
        setSearch((e.target as HTMLInputElement).value)
    }

    const handleSelectGenre = (e: ChangeEvent) => {
        setSelectedGenre(parseInt((e.target as HTMLInputElement).value))
    }

    if (isLoading) {
        return (<Preloader />)
    }

    if (typeof error === 'object' && Object.keys(error).length > 0) {
        return <Alert>Error loading genres... 😢</Alert>
    }

    return (
        <div className={styles.container}>
          <MovieSelectorSidebar
            genres={genres}
            search={search}
            onSearch={handleSearch}
            selectedGenre={selectedGenre}
            onSelectGenre={handleSelectGenre}
            />

          <main className={`${styles.main} ${selectedGenre ? styles.mainGrid : ''}`}>
            <MovieList genres={genres} selectedGenre={selectedGenre} />
          </main>
        </div>
    )
}

export default MovieSelector
