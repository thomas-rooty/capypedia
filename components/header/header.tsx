import styles from './header.module.css'
import Searchbar from '@/components/header/searchbar/searchbar'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Explore the world of Capybaras</h1>
        <h2 className={styles.subtitle}>Where Adventure Splashes with Cuteness!</h2>
      </div>
      <Searchbar />
    </header>
  )
}

export default Header
