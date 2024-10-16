import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa6"
import Button from '../UI/Button'
import { useState } from "react"

export default function Login() {

  const [passwordBlindFold, setPasswordBlindFold] = useState(true)
  const [confirmBlindFold, setConfirmBlindFold] = useState(true)


  return (
    <section className="flex items-center h-screen">
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <div className="shadow-box-shadow-4 max-w-[400px] w-full p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-3xl">Sign Up</h2>
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
                    type={passwordBlindFold ? "password" : "text"} 
                    placeholder="**********" 
                    className="border-0 flex-1 focus:ring-0"
                  />
                  <div className="p-2 cursor-pointer" onClick={() => setPasswordBlindFold(prev => !prev)}>
                    { passwordBlindFold ? <FaEyeSlash /> : <FaEye /> }
                  </div>
                </div>
              </div>

              <div className="input-group flex flex-col mb-6">
                <label className="mb-2 text-sm">Confirm Password</label>
                <div className="flex border items-center">
                  <input 
                    type={confirmBlindFold ? "password" : "text"} 
                    placeholder="**********" 
                    className="border-0 flex-1 focus:ring-0"
                  />
                  <div className="p-2 cursor-pointer" onClick={() => setConfirmBlindFold(prev => !prev)}>
                    { confirmBlindFold ? <FaEyeSlash /> : <FaEye /> }
                  </div>
                </div>
              </div>

              <Button className="text-center bg-primary p-2 text-white mb-4 rounded-sm cursor-pointer">
                Sign up
              </Button>

              <div className="flex space-x-2 text-sm">
                <p>Already have an account?</p>
                <a href="#" className="text-primary">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
