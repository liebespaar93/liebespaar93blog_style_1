import { GithubFaceLine } from '@/components/assests/Github'
import styles from './page.module.css'
import parallax from '@/styles/parallax.module.css'

export default function Home() {

  return (
    <main className={`${styles.main} ${parallax.parallax}`}>
      <div className={`${styles.contanier} ${parallax.parallax_group}`}>
        <div className={`${styles.benner} ${parallax.parallax_layer_back}`}>
          <div className={styles.benner_img}>
            <img src="/images/blog_benner.gif" data-speedx="0.3" loading='lazy' alt="blog_benner" />
          </div>
        </div>
        <div className={`${styles.home} ${parallax.parallax_layer_base}`}>
          <div className={styles.title}>
            <div className={styles.svg} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                <text x="50%" y="50%" textAnchor="middle">
                  Blog
                </text>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                <text x="50%" y="50%" textAnchor="middle">
                  Neon Light
                </text>
              </svg>
            </div>
          </div>
          <div className={styles.context}>
            <div className={styles.git_info}>
              <div className={styles.git_svg}>
                <GithubFaceLine />
              </div>
              <div>
                <ul>
                  <li>aaa</li>
                  <li>ss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
