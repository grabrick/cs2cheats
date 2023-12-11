import Image from 'next/image'
import m from './Footer.module.scss'
import Logo from '@/assets/icons/LogoWhite.svg'

const Footer = () => {
    return (
        <footer className={m.container}>
            <div className={m.wrapper}>
                <div className={m.logo}>
                    <Image src={Logo} alt='' />
                    <h1 className={m.title}>CS2 Cheats</h1>
                </div>
                <div className={m.copyright}>
                    <h3 className={m.copyrightText}>© 2023 CS2Cheats Все права защищены.</h3>
                </div>
                <div className={m.contacts}>
                    <span className={m.link}>Telegram</span>
                    <span className={m.link}>Discord</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer