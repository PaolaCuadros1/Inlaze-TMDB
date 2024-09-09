import styles from './Home.module.css'
import MovieSelector from "@/components/MovieSelector/MovieSelector"

export default function Home() {
  return (
    <>
      <figure className={styles.hero}>
        <img src="/main-banner.png" alt="" />
      </figure>

      <MovieSelector />
    </>
  )
}
