import { useState } from "react"
import { IoMenuSharp } from "react-icons/io5"


export default function Header() {
  
  const links = ['Home', 'About', 'Contact', 'Testimonials']

  const navigation = links.map((link, i) => (
    <li key={i}>
      <a className="text-lg mr-8 lg:text-base" href={`/${link}`}>{link}</a>
    </li>
  ))

    const [open, setOpen] = useState(false)

  return (
    <header className="shadow-md sticky top-0 w-full z-[1000] bg-white">
      <div className="container mx-auto p-6 items-center lg:flex justify-between">
        <div className="flex justify-between">
          <h2 className="text-primary font-semibold text-xl">RealHomez</h2>
          <div className="cursor-pointer lg:hidden" onClick={() => {setOpen(prev => !prev)}}>
            <IoMenuSharp size="32" />
          </div>
        </div>

        <div>
          <ul className={`${`flex flex-col gap-8 mt-8 absolute left-0 top-8 bg-white w-full p-6 h-screen ${!open ? '-translate-x-full' : 'translate-x-0'} transition lg:hidden`}`}>
            {navigation}
          </ul>
        </div>

        <div>
          <ul className="hidden lg:flex">
            {navigation}
          </ul>
        </div>
      </div>
    </header>
  )
}