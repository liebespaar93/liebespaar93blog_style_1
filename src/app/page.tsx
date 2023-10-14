import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contanier}>
        <div className={styles.benner}>
          <div className={styles.benner_img}>
            <img src="/images/blog_benner.gif" data-speedx="0.3" loading='lazy' alt="blog_benner" />
          </div>
        </div>
        <div className={styles.home}>
          <div className={styles.title}>
            <div className={styles.svg} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                <text x="50%" y="50%" text-anchor="middle">
                  Blog
                </text>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                <text x="50%" y="50%" text-anchor="middle">
                  Neon Light
                </text>
              </svg>
            </div>
          </div>
          <div className={styles.context}>
            testestse
          </div>
        </div>
      </div>
    </main>
  )
}
