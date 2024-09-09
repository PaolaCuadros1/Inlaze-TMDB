
import { Genre } from "@/types"
import { ChangeEvent } from "react"
import styles from './Sidebar.module.css'

interface Props {
    genres?: Genre[]
    search?: string
    selectedGenre?: Genre['id']
    onSearch: (e: ChangeEvent<Element>) => void;
    onSelectGenre: (e: ChangeEvent<Element>) => void;
}

const MovieSelectorSidebar = ({ genres = [], onSearch, search, onSelectGenre, selectedGenre }: Props) => {
    return (
        <aside className={`container-fluid ${styles.container}`}>
            <div className="mb-4">
                <h2 className={styles.title}>Search</h2>
                <input type="search" onChange={onSearch} defaultValue={search} className="form-control" placeholder="Keywords" />
            </div>

            <div className="mb-4">
                <h2 className={styles.title}>Genres</h2>
                <select className="form-select" aria-label="---" onChange={onSelectGenre} defaultValue={selectedGenre}>
                    <option value=""></option>
                    {[].map.call(genres, (g) => <option key={`genre-option-${g.id}`} value={g.id}>{g.name}</option>)}
                </select>
            </div>
        </aside>
    )
}

export default MovieSelectorSidebar