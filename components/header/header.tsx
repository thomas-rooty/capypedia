import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Explore the world of Capybaras</h1>
        <h2 className={styles.subtitle}>Where Adventure Splashes with Cuteness!</h2>
      </div>
    </header>
  )
}

export default Header
