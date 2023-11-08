import { useContext } from 'react'
import { ScrollContext } from './scrollContext'
import { ScrollProvider } from './scrollProvider'
import styles from './page.module.css'

const Header = () => {
  const scrollTo = useContext(ScrollContext)

  const HEADER_NAVIGATION = ['first', 'second', 'third', 'fourth']

  return (
    <header className={styles.header}>
      <ul className={styles.header_list}>
        {HEADER_NAVIGATION.map(currentLink => (
          <li key={currentLink}>
            <a
              href={`#${currentLink}-section`}
              onClick={(event) => scrollTo(event, `#${currentLink}-section`)}
            >
              {currentLink}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
