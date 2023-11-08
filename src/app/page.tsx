'use client'
import { useContext, useEffect, useRef } from 'react'
import styles from './page.module.css'
import { ScrollProvider } from './scrollProvider'
import Header from './header'

export default function Home() {

  return (
    <ScrollProvider>
      <main id="js-scroll" className={styles.main}>
        <Header />

        <section className={styles.section} id="first-section">
          <p>
            Solaris is a blockchain-based meta-universe that has huge potential to grow and attract millions of users from around the world.  Solaris is a unique combination of gameplay, blockchain and token economy with the ability to earn money through pools and in-game activities, SMV promises to be one of the most popular and innovative crypto-games on the market in 2024.
          </p>
        </section>
        <section className={styles.section} id="second-section">
          <p>
            In addition to exciting gameplay and unforgettable experience of conquering the universe, our project offers another unique advantage - the opportunity to earn tokens. You can earn tokens by exchanging and freezing your assets, as well as by participating in pools. Our team is looking forward to 2024 to present you our next level steaking system, which will be absolutely revolutionary. We strive to constantly develop and improve our project to provide you with the most advanced earning and investing opportunities.
          </p>
        </section>
        <section className={styles.section} id="third-section">
          <p>
                    EXPLORE OUTER SPACE
            Venture through the stars and explore more than 10.000 generated planets. Navigate bustling cities, explore dangerous bases, and traverse wild landscapes. Meet and recruita memorable cast of characters, join in the adventures of various factions, and embark on quests across the Settled Systems.
          </p>
        </section>
        <section className={styles.section} id="fourth-section">
          <p>
            DISCOVER, COLLECT, BUILD
            Explore planets and discover the fauna, flora, and resources needed to craft everything from medicine and food to equipment and weapons. Build outposts and hire a crew to passively extract materials and establish cargo links to transfer resources between them. Invest these raw materials into research projects to unlock unique crafting recipes
          </p>
        </section>
      </main>
    </ScrollProvider>
  )
}
