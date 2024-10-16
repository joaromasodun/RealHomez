import Button from '../UI/Button'
import { IoMdArrowForward } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { BsTelephone, BsEnvelope } from "react-icons/bs"

export default function Footer() {
  return(
    <footer>
      <div className="py-10 bg-section-bg-2">
        <div>
          {/* -translate-y-[8rem] lg:-translate-y-[10rem] */}
          <div className="container mx-auto p-6">
            <div className="bg-primary flex items-center justify-center flex-col py-10 gap-4 lg:flex-row lg:justify-between lg:p-14">
              <div className="text-center text-white lg:text-start">
                <h5 className="text-xl font-bold mb-2 lg:text-4xl">
                  <div className="block">Looking for a dream home?</div>
                </h5>
                <p className="">We can help you realise your dream of a new home.</p>
              </div>
              <Button className='bg-white py-2 px-4 text-lg  flex items-center gap-2 shadow-box-shadow-4 cursor-pointer lg:py-5'>
                Explore Properties
                <IoMdArrowForward />
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-6 lg:grid grid-cols-8 lg:gap-8">
          <div className="brand-info text-white mb-8 lg:col-span-3">
            <h2 className='font-bold text-2xl mb-4'>RealHomez</h2>
            <p className='text-sm leading-snug mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, placeat iure vitae nostrum odio sint?</p>
            <div>
              <ul className='flex gap-4 flex-col'>
                <li>
                  <p className='flex items-center gap-2'>
                    <i><CiLocationOn className='text-white'/></i>
                    <span className='text-sm'>Tampabay Aisle, Brooklyn, USA</span>
                  </p>
                </li>
                <li>
                  <p className='flex items-center gap-2'>
                    <i><BsTelephone className='text-white'/></i>
                    <span className='text-sm'>+(234) 816 8123</span>
                  </p>
                </li>
                <li>
                  <p className='flex items-center gap-2'>
                    <i><BsEnvelope className='text-white'/></i>
                    <span className='text-sm'>business@email.com</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex gap-4 flex-col lg:col-span-5 lg:flex-row lg:justify-between'>
            <div className='text-white'>
              <h3 className='text-lg font-semibold mb-4'>Company</h3>
              <ul className='flex flex-col gap-2'>
                <a href="#" className='text-sm'>About</a>
                <a href="#" className='text-sm'>Blog</a>
                <a href="#" className='text-sm'>Contact us</a>
              </ul>
            </div>
            <div className='text-white'>
              <h3 className='text-lg font-semibold mb-4'>Services</h3>
              <ul className='flex flex-col gap-2'>
                <a href="#" className='text-sm'>Login</a>
                <a href="#" className='text-sm'>WishList</a>
                <a href="#" className='text-sm'>Terms and Condition</a>
                <a href="#" className='text-sm'>Promotional Offers</a>
              </ul>
            </div>
            <div className='text-white'>
              <h3 className='text-lg font-semibold mb-4'>Customer Care</h3>
              <ul className='flex flex-col gap-2'>
                <a href="#" className='text-sm'>Login</a>
                <a href="#" className='text-sm'>WishList</a>
                <a href="#" className='text-sm'>Terms and Condition</a>
                <a href="#" className='text-sm'>Promotional Offers</a>
              </ul>
            </div>
            <div className='text-white'>
              <h3 className='text-lg font-semibold mb-4'>Customer Care</h3>
              <ul className='flex flex-col gap-2'>
                <a href="#" className='text-sm'>Login</a>
                <a href="#" className='text-sm'>WishList</a>
                <a href="#" className='text-sm'>Terms and Condition</a>
                <a href="#" className='text-sm'>Promotional Offers</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
