import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa6"
import Button from '../UI/Button'
import { useState } from "react"

export default function Login() {

  const [blindFold, setBlindFold] = useState(true)

  return (
    <section className="flex items-center h-screen">
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <div className="shadow-box-shadow-4 max-w-[400px] w-full p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-3xl">Login</h2>
            <form>
              <div className="input-group flex flex-col mb-6">
                <label className="mb-2 text-sm">Email</label>
                <input 
                  type="text" 
                  placeholder="user@email.com" 
                  className="focus:ring-0"
                />
              </div>

              <div className="input-group flex flex-col mb-6">
                <label className="mb-2 text-sm">Password</label>
                <div className="flex border items-center">
                  <input 
                    type={blindFold ? "password" : "text"} 
                    placeholder="**********" 
                    className="border-0 flex-1 focus:ring-0"
                  />
                  <div className="p-2 cursor-pointer" onClick={() => setBlindFold(prev => !prev)}>
                    { blindFold ? <FaEyeSlash /> : <FaEye /> }
                  </div>
                </div>
              </div>

              <span className="block mb-4 text-sm">Forgot Password?</span>

              <Button className="text-center bg-primary p-2 text-white mb-4 rounded-sm cursor-pointer">Login</Button>

              <div className="flex space-x-2 text-sm">
                <p>Dont have an account?</p>
                <a href="#" className="text-primary">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
