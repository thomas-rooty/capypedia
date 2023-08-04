import styles from './searchbar.module.css'

const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <input className={styles.input} type="text" placeholder="Discover your next capybara ....." />
      <div className={styles.searchButton}>
        <span>Search</span>
        <img className={styles.zoom} src="/icons/zoom.svg" alt="search icon" />
      </div>
    </div>
  )
}

export default Searchbar
