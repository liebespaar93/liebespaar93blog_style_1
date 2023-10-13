import Image from 'next/image'
import styles from './page.module.css'
import Other from './other/page'
import Nav from './components/Nav'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      안녕하세요
    </main>
  )
}
