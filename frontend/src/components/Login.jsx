
export default function Login() {
  return (
    <div className="shadow-box-shadow-4 my-10 container mx-auto justify-center h-screen">
      <div className="border max-w-[500px]">
        <div className="input-group flex flex-col">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="email" className=""/>
        </div>

        <div className="input-group flex flex-col">
          <label htmlFor="">Password</label>
          <input type="email" placeholder="email" className=""/>
        </div>
      </div>
    </div>
  )
}
