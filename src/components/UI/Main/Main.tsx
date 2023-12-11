import Image from 'next/image';
import m from './Main.module.scss'
import Man from '@/assets/images/Man.png'

const Main = () => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <Image src={Man} alt='' />
        <div className={m.textWraper}>
          <h1 className={m.title}>CS2Cheats</h1>
          <p className={m.text}>Цифровой магазин высококачественных читов для игр Наверняка вы хотите быть победителем и никогда не проигрывать?</p>
        </div>
      </div>
    </div>
  )
}

export default Main;