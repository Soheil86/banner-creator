import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>
            Banner Creator App - All right reserved - Design & Developed by
            Soheil Ghanbari,
          </p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
