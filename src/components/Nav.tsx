import title_css from '@/styles/title.module.css'

export default function Nav() {
    /* 깃 이미지 가져오기 필요 */
    let img_src = "/images/82822684.jpeg"

    return (
        <div className={title_css.nav}>
            <div className={title_css.contanier}>
                <div className={title_css.logo}>
                    <div className={title_css.kstyle}>Kyoulee </div>
                </div>
                <div className={title_css.content}>
                    <div className={title_css.profile}>
                        <div className={title_css.profile_img}>
                            <img src={img_src} />
                        </div>
                    </div>
                    <div className={title_css.navigate}>
                        <ul>
                            <li>Nav</li>
                            <li>Category</li>
                            <li>Info</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}