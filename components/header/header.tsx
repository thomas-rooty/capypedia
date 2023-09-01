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
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <img className={styles.statIcon} src="/icons/basket.png" alt="heart" />
          <p className={styles.statTitle}>For Sale</p>
          <p className={styles.statValue}>+500</p>
        </div>
        <div className={styles.stat}>
          <img className={styles.statIcon} src="/icons/capybaras.png" alt="heart" />
          <p className={styles.statTitle}>Capybaras</p>
          <p className={styles.statValue}>5,200</p>
        </div>
        <div className={styles.stat}>
          <img className={styles.statIcon} src="/icons/articles.png" alt="heart" />
          <p className={styles.statTitle}>Articles</p>
          <p className={styles.statValue}>+1,820</p>
        </div>
        <div className={styles.stat}>
          <img className={styles.statIcon} src="/icons/community.png" alt="heart" />
          <p className={styles.statTitle}>Members</p>
          <p className={styles.statValue}>500,000</p>
        </div>
      </div>
    </header>
  )
}

export default Header
