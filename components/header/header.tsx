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
      <div className={styles.capyContainer}>
        <img className={styles.capy} src="/images/capybara_left.png" alt="capybara left" />
        <img className={styles.capy} src="/images/capybara_right.png" alt="capybara right" />
      </div>
      <div className={styles.headerLowerPane}/>
    </header>
  )
}

export default Header
