import Button from '../UI/Button'

export default function Search () {
  return (
    <div className="container mx-auto p-10 lg:py-16">
      <div className="grid grid-col gap-6 md:grid-cols-2 shadow-box-shadow-4 p-8 lg:grid-cols-4">
        <div className="relative">
          <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-primary hover:border-primary shadow-sm focus:shadow-md appearance-none cursor-pointer md:py-3">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="relative">
          <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-primary hover:border-primary shadow-sm focus:shadow-md appearance-none cursor-pointer md:py-3">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="relative">
          <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer md:py-3">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className='px-16 mt-2 md:px-0 md:mt-0 md:h-full'>
          <Button className="text-center py-2 bg-primary text-white md:h-full lg:flex items-center lg:justify-center cursor-pointer">Find Now</Button>
        </div>
      </div>
    </div>
  )
}