import img from '../assets/hero.jpg'
import PropertyInfo from '../UI/PropertyInfo'
import { IoLogoFacebook } from "react-icons/io"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import Button from '../UI/Button'

export default function PropertyDetails() {
  return(
    <div>
      <div className='grid gap-2 mb-4 lg:grid-cols-2 p-2'>
        <div>
          <img src={img} alt="" />
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className=''>
            <img src={img} alt="" />
          </div>
          <div className=''>
            <img src={img} alt="" />
          </div>
          <div className=''>
            <img src={img} alt="" />
          </div>
          <div className=''>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10 lg:py-20">
        <div className='grid md:grid-cols-12 md:gap-4'>
          <div className='lg:col-span-8'>
            <div className="address mb-6">
              <h2 className='text-xl font-bold md:text-2xl mb-4 lg:text-3xl'>Diamond Manor Apartment</h2>
              <div>
                <h2 className='text-sm font-normal text-gray-500'>10765 Hillshire Ave, Baton Rouge, LA 70810, USA.</h2>
            </div>
            </div>            
            <div className='mb-6'>
              <h2 className='text-xl  font-semibold mb-4'>Description</h2>
              <p className='text-sm text-gray-500 lg:pr-10 leading-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque asperiores suscipit sunt et quibusdam provident facere sit mollitia ut, praesentium iure. Voluptatem fuga corrupti itaque nostrum iusto fugit, quis molestiae porro aspernatur voluptatum. Magnam ad dolorem nesciunt porro voluptatum vitae dolorum harum ex fuga animi! Temporibus rerum consequuntur atque.
              </p>
            </div>
            <div className='mb-6'>
              <PropertyInfo numberOfBedroom={3} numberOfBathroom={4} feet={200} />
            </div>
            <div className="MAP"></div>
          </div>
          <div className='lg:col-span-4'>
            <div className='border p-6 rounded-sm'>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <img src={img} alt="" className="h-32 w-32 rounded-full"/>
                </div>
                <div className="agent-details text-center">
                  <h3>William Soucek</h3>
                  <span className="text-sm mb-2 block">Agent</span>
                  <div className="flex items-center justify-center gap-4">
                    <IoLogoFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>

          <div className='border mt-8 px-6 py-8 radius-sm'>
            <h3 className='text-center text-xl font-bold mb-8 lg:text-2xl'>Drop Message for the agent</h3>
            <form className="">
              <div className="form-group border flex items-center justify-center mb-8 h-16">
                <input type="text" placeholder="Your Name" className='w-full border-none focus:outline-none focus:ring-0'/>
              </div>

              <div className="form-group border flex items-center justify-center mb-8 h-16">
                <input type="email" placeholder="Your Email" className='w-full border-none focus:outline-none focus:ring-0'/>
              </div>

              <textarea className='border border-gray-500 w-full h-32 focus:ring-0'>

              </textarea>

              <Button className="w-full bg-primary text-white uppercase text-center p-4 mt-4 cursor-pointer">Send Message</Button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
