'use client'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <img src="/icons/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.links}>
        <div className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
          <Link href={'/'}>Home</Link>
        </div>
        <div className={`${styles.link} ${isActive('/capybaras') ? styles.active : ''}`}>
          <Link href={'/capybaras'}>Capys</Link>
        </div>
        <div className={`${styles.link} ${isActive('/articles') ? styles.active : ''}`}>
          <Link href={'/articles'}>Articles</Link>
        </div>
        <div className={`${styles.link} ${isActive('/shop') ? styles.active : ''}`}>
          <Link href={'/shop'}>Shop</Link>
        </div>
        <div className={`${styles.link} ${isActive('/aboutus') ? styles.active : ''}`}>
          <Link href={'/aboutus'}>About Us</Link>
        </div>
        <div className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`}>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar