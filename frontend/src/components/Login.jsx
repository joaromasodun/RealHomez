import { FaEye } from "react-icons/fa";
import Button from '../UI/Button'

export default function Login() {
  return (
    <section className="flex items-center h-screen">
      <div className="container p-4">
        <div className="flex justify-center">
          <div className="shadow-box-shadow-4 max-w-[400px] w-full p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-3xl">Login</h2>
            <form>
              <div className="input-group flex flex-col mb-6">
                <label className="mb-2">Email</label>
                <input 
                  type="text" 
                  placeholder="user@email.com" 
                  className="focus:ring-0"
                />
              </div>

              <div className="input-group flex flex-col mb-6">
                <label className="mb-2">Password</label>
                <div className="flex border items-center">
                  <input 
                    type="password" 
                    placeholder="**********" 
                    className="border-0 flex-1 focus:ring-0"
                  />
                  <div className="p-2">
                    <FaEye />
                  </div>
                </div>
              </div>

              <span className="block mb-4">Forgot Password?</span>

              <Button className="text-center bg-primary p-2 text-white mb-4 rounded-sm cursor-pointer">Login</Button>

              <div className="flex space-x-2">
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
